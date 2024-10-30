const express = require('express');
const router = express.Router();

const Aluno = require('../models/aluno');
const Disciplina = require('../models/disciplina');

router.get('/', async (req, res) => {
    try {
        const disciplina = await Disciplina.find();
        res.status(200).json(disciplina);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        
        const disciplina = await Disciplina.findById(id);
        if (!disciplina) {
            return res.status(422).json({ mensagem: "Disciplina não encontrada" });
        }

        const alunos = await Aluno.find({ fk_idTurma: id });

        res.status(200).json({ disciplina, alunos });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});



router.post('/', async (req, res) => {
    const { nome, cargaHoraria, sala } = req.body;

    const disciplina = {
        nome,
        cargaHoraria,
        sala
    }

    try {
        await Disciplina.create(disciplina);
        res.status(201).json(disciplina);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateFields = req.body;

        const updateDisciplina = await Disciplina.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updateDisciplina) {
            return res.status(422).json({ mensagem: "Disciplina não encontrada" });
        }

        res.status(200).json(updateDisciplina);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar disciplina", erro: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const disciplina = await Disciplina.findByIdAndDelete(id);

        if (!disciplina) {
            return res.status(422).json({ mensagem: "Disciplina não encontrada" });
        }

        await Aluno.deleteMany({ turmaId: id });

        res.status(200).json({ mensagem: "Disciplina e alunos excluídos com sucesso!" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir disciplina", erro: error.message });
    }
});


module.exports = router;