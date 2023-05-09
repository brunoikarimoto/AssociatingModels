const mongoose = require('mongoose');

const dbConfig = "mongodb+srv://brunoikarimoto:coxinha123@cluster0.fxho0xm.mongodb.net/Exercicio?retryWrites=true&w=majority";

const conexao = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conexao;