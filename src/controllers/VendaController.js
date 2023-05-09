const Venda = require('../models/VendaModel');
const Cliente = require('../models/ClienteModel');

module.exports = {
    async read(req, res){
        const vendaList = await Venda.find().populate('cliente', 'nome');
        return res.json(vendaList);
    },

    async create(req, res){
        const {produto, quantidade, cliente} = req.body;

        if(!produto || !quantidade || !cliente){
            return res.status(400).json({error: "Produto, quantidade e id de cliente devem estar preenchidos!"});
        }

        const clienteAux = Cliente.findOne({_id:cliente});

        if(!clienteAux){
            return res.status(401).json({error: "Cliente não encontrado."});
        }

        const vendaCriada = await Venda.create({
            cliente,
            produto,
            quantidade
        });

        return res.json(vendaCriada);
    },

    async delete(req, res){
        const {id} = req.params;
        const vendaDeletada = await Venda.findOneAndDelete({_id:id});

        if(vendaDeletada){
            return res.json(vendaDeletada);
        }

        return res.status(401).json({error: "Venda não encontrado."});
    },

    async update(req, res){
        const {id} = req.params;
        const {cliente, produto, quantidade} = req.body;
        const vendaAux = await Venda.findOne({_id:id});

        if(!cliente || !produto || !quantidade){
            return res.status(400).json({error: "Produto, quantidade e id de cliente devem estar preenchidos!"});
        }

        const clienteAux = await Cliente.findOne({_id:cliente});

        if(!clienteAux){
            return res.status(401).json({error: "Cliente não encontrado."});
        }

        vendaAux.cliente = cliente;
        vendaAux.produto = produto;
        vendaAux.quantidade = quantidade;

        await vendaAux.save();

        return res.json(vendaAux);
    },

    async buscaVendas(req, res){
        const {cliente} = req.params;
        const clienteAux = await Cliente.findOne({_id:cliente});
        const listaVendas = await Venda.find({cliente:cliente}).populate('cliente', 'nome');

        if(!listaVendas || !clienteAux){
            return res.status(401).json({error: "Vendas não encontradas."});
        }

        return res.json(listaVendas);
    },
}