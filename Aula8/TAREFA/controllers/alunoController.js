const express = require('express');
const router = express.Router();

const Aluno = require('../models/aluno');
const Disciplina = require('../models/disciplina');

router.get('/', async (req, res) => {
    try {
        const alunos = await Aluno.find().populate('turmaId');
        res.status(200).json(alunos);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const aluno = await Aluno.findOne({ _id: id });

        if (!aluno) {
            res.status(422).json({ mensagem: "Aluno não encontrado" });
            return;
        }

        res.status(200).json(aluno);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});


router.post('/', async (req, res) => {
    const { nome, idade, RA, turmaId } = req.body;

    const aluno = {
        nome,
        idade,
        RA,
        turmaId
    }

    try {
        await Aluno.create(aluno);
        res.status(201).json(aluno);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateFields = req.body;

        const updatealuno = await Aluno.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatealuno) {
            return res.status(422).json({ mensagem: "Aluno não encontrado" });
        }

        res.status(200).json(updatealuno);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar aluno", erro: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const aluno = await Aluno.findByIdAndDelete(req.params.id);

        if (!aluno) {
            return res.status(422).json({ mensagem: "Aluno não encontrado" });
        }

        res.status(200).json({ mensagem: "Excluído com sucesso!" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir aluno", erro: error.message });
    }
});


module.exports = router;