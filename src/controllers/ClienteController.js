const Cliente = require('../models/ClienteModel');

module.exports = {
    async read(req, res){
        const clienteList = await Cliente.find();
        return res.json(clienteList);
    },

    async create(req, res){
        const {    nome, idade, cpf    } = req.body;

        if(!nome || !idade || !cpf){
            return res.status(400).json({error: "Nome, idade e cpf devem ser preenchidos!"});
        }

        const clienteCriado = await Cliente.create({
            nome,
            idade,
            cpf
        });

        return res.json(clienteCriado);
    },

    async delete(req, res){
        const {id} = req.params;
        const clienteDeletado = await Cliente.findOneAndDelete({_id:id});

        if(clienteDeletado){
            return res.json(clienteDeletado);
        }

        return res.status(401).json({error: "Cliente não encontrado."});
    },

    async update(req,res){
        const {id} = req.params;
        const {    nome, idade, cpf    } = req.body;
        const clienteAux = await Cliente.findOne({_id:id});

        if(!nome || !idade || !cpf){
            return res.status(400).json({error: "Nome, idade e cpf devem ser preenchidos!"});
        }

        if(!clienteAux){
            return res.status(400).json({error: "Cliente não encontrado."});
        }

        clienteAux.nome = nome;
        clienteAux.idade = idade;
        clienteAux.cpf = cpf;

        await clienteAux.save();

        return res.json(clienteAux);
    },

    async busca(req, res){
        const {id} = req.params;
        const clienteAux = await Cliente.findOne({_id:id});

        if(!clienteAux){
            return res.status(400).json({error: "Cliente não encontrado."});
        }

        return res.json(clienteAux);
    },
}