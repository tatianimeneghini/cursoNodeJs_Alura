const Atendimento = require('../models/atendimentos');

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        res.send('GET funcionando')
    });
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;

        Atendimento.adiciona(atendimento);
        res.send('POST funcionando');
    })
};