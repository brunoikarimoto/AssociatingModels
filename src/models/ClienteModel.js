const mongoose = require('mongoose');

const ClienteModelSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    cpf: String
});

module.exports = mongoose.model('Cliente', ClienteModelSchema);