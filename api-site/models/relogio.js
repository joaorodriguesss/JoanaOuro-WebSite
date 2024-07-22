var mongoose = require('mongoose');

const relogioSchema = new mongoose.Schema({
    _id: Number,
    nome: String,
    funcoes: String,
    movimento: String,
    resistencia: String,
    tipo_mostrador: String,
    cor_mostrador: String,
    cor_bracelete: String,
    material_bracelete: String,
    cor_caixa: String,
    material_caixa: String,
    genero: String,
    dimensoes_caixa: String
}, { versionKey: false });

module.exports = mongoose.model('Relogio', relogioSchema, 'relogios_homem');
