const mongoose = require('mongoose');
const Relogio = require('./models/relogio');

const mongoDB = "mongodb://127.0.0.1/loja";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
    return Relogio.find({ genero: 'homem' }).exec();
  })
  .then(dados => {
    console.log('Dados encontrados:', dados);
    return mongoose.disconnect();
  })
  .catch(err => {
    console.error('Erro:', err);
  });
