var mongoose = require('mongoose');
var Relogio = require('../models/relogio'); 

// Lista todos os relógios de uma categoria
exports.list = function(categoria) {
    return Relogio.find({ genero: categoria }).exec();
};

// Encontra um relógio específico por ID
exports.findById = function(categoria, id) {
    return Relogio.findOne({ genero: categoria, _id: id }).exec();
};

// Adiciona um novo relógio
exports.insert = function(categoria, dados) {
    var novoRelogio = new Relogio(dados);
    return novoRelogio.save();
};

// Remove um relógio por ID
exports.removeById = function(categoria, id) {
    return Relogio.deleteOne({ genero: categoria, _id: id }).exec();
};

// Atualiza um relógio
exports.update = function(categoria, id, dados) {
    return Relogio.updateOne({ genero: categoria, _id: id }, dados).exec();
};
