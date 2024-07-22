var express = require('express');
var router = express.Router();
var Relogio = require('../controllers/relogio');

// Obter todos os relógios de uma categoria
router.get('/:categoria', function(req, res, next) {
    Relogio.list(req.params.categoria)
        .then(dados => res.json(dados))  // Use res.json ao invés de res.jsonp
        .catch(erro => res.status(500).json(erro));
});

// Obter um relógio específico de uma categoria
router.get('/:categoria/:id', function(req, res, next) {
    Relogio.findById(req.params.categoria, req.params.id)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro));
});

// Adicionar um novo relógio
router.post('/:categoria', function(req, res, next) {
    Relogio.insert(req.params.categoria, req.body)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro));
});

// Remover um relógio
router.delete('/:categoria/:id', function(req, res, next) {
    Relogio.removeById(req.params.categoria, req.params.id)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro));
});

// Atualizar um relógio
router.put('/:categoria/:id', function(req, res, next) {
    Relogio.update(req.params.categoria, req.params.id, req.body)
        .then(dados => res.json(dados))
        .catch(erro => res.status(500).json(erro));
});

module.exports = router;
