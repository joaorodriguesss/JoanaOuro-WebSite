const express = require('express');
const router = express.Router();
const axios = require('axios');

// Puxando produtos da API
router.get('/:id', (req, res, next) => {
  const produtoId = req.params.id;
  axios.get(`http://localhost:17000/relogios/homem/${produtoId}`)
    .then(response => {
      const produto = response.data;
      res.render('produto', { produto });
    })
    .catch(error => {
      console.log('Erro ao carregar o produto: ' + error);
      res.render('error', { error: 'Erro ao carregar o produto' });
    });
});

module.exports = router;
