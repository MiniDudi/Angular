const mongoose = require('mongoose');

const Aluno = mongoose.model('Aluno', {
    nome: String,
    idade: Number,
    RA: String,
    turmaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Disciplina'
    }
});

module.exports = Aluno;