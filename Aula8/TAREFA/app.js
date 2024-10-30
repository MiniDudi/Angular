const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// ====================================
const alunoController = require('./controllers/alunoController');
const disciplinaController = require('./controllers/disciplinaController');

app.use('/alunos', alunoController);
app.use('/disciplinas', disciplinaController);

// ====================================
mongoose.connect('mongodb://127.0.0.1:27017/aula10')
    .then(() => {
        app.listen(27017, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor iniciado na porta 27017');
        })
    })
    .catch((err) => {
        console.log(err);
    });

// ====================================
app.listen(3000, () => { 
    console.log('Server running on port 3000');
});