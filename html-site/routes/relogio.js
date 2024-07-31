var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET relogios page. */
router.get('/', function(req, res, next) {
    res.render('relogios', { title: 'Relógios' });
});

/* GET relogios de homem page. */
router.get('/homem', (req, res, next) => {
    axios.get('http://localhost:17000/relogios/homem')
        .then(response => {
            res.render('relogios_homem', { title: 'Relógios de Homem', relogios: response.data });
        })
        .catch(error => {
            console.log('Erro ao carregar relógios de homem: ' + error);
            res.render('error', { error: 'Erro ao carregar relógios de homem' });
        });
});

/* GET relogios de mulher page. */
router.get('/mulher', (req, res, next) => {
    axios.get('http://localhost:17000/relogios/mulher')
        .then(response => {
            res.render('relogios_mulher', { title: 'Relógios de Mulher', relogios: response.data });
        })
        .catch(error => {
            console.log('Erro ao carregar relógios de mulher: ' + error);
            res.render('error', { error: 'Erro ao carregar relógios de mulher' });
        });
});

module.exports = router;

