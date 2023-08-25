require('dotenv').config({path: __dirname + '/.env'});
const mongoose = require('mongoose');
const dbConfig = process.env.MONGO;

const conexao = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conexao;