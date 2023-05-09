const mongoose = require('mongoose');

const VendaModelSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId, ref: "Cliente",
    },
    produto: String,
    quantidade: Number,
});

module.exports = mongoose.model('Venda', VendaModelSchema);