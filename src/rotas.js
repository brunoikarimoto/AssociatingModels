const express = require('express');
const rotas = express.Router();
const ClienteController = require('./controllers/ClienteController');
const VendaController = require('./controllers/VendaController');

/*  CLIENTE    */
rotas.get('/cliente', ClienteController.read);
rotas.post('/cliente', ClienteController.create);
rotas.delete('/cliente/:id', ClienteController.delete);
rotas.post('/cliente/:id', ClienteController.update);
rotas.get('/cliente/:id', ClienteController.busca);
/*   VENDAS   */ 
rotas.get('/venda', VendaController.read);
rotas.post('/venda', VendaController.create);
rotas.delete('/venda/:id', VendaController.delete);
rotas.post('/venda/:id', VendaController.update);
rotas.get('/venda/:cliente', VendaController.buscaVendas);

module.exports = rotas;