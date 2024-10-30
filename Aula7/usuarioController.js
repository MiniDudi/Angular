const express = require('express')
const router = express.Router

router.get('/users', (req, res) => {
    return res.json({ message: 'Lista de usuários' });
});

router.get('/users/:id', (req, res) => {
    return res.json({ message: 'Usuário: ' + req.params.id });  
})
