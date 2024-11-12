const express = require('express');
const router = express.Router();

const Exame = require('../models/exame.js');
const Cliente = require('../models/cliente.js');

router.get('/', async (req, res) => {
    try {
        const exames = await Exame.find().populate('id_cliente');

        res.status(200).json(exames);
    } catch (error) {
        res.status(500).json({ error: error });
    }
});


router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const exame = await Exame.findOne({ _id: id }).populate('id_cliente');

        if (!exame) {
            res.status(422).json({ mensagem: "exame não encontrado" });
            return;
        }

        res.status(200).json({ exame });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});



router.post('/', async (req, res) => {
    const { nome, clinica, id_cliente } = req.body;

    try {

        const cliente = await Cliente.findById(id_cliente);
        if (!cliente) {
            res.status(422).json({ mensagem: "Cliente não encontrado" });
            return;
        }

        const exame = {
            nome,
            clinica,
            id_cliente,
        }

        await Exame.create(exame);
        res.status(201).json(exame);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateFields = req.body;

        const updatedexame = await Exame.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatedexame) {
            return res.status(422).json({ mensagem: "Exame não encontrado" });
        }

        res.status(200).json(updatedexame);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar Exame", erro: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const exame = await Exame.findByIdAndDelete(req.params.id);

        if (!exame) {
            return res.status(422).json({ mensagem: "Exame não encontrado" });
        }

        res.status(200).json({ mensagem: "Excluído com sucesso!" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir Exame", erro: error.message });
    }
});


module.exports = router;