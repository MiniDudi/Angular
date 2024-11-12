const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente', {
    nome: String,
    idade: Number,
    ra: Number,
});

module.exports = Cliente;
