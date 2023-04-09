var express = require('express');
const productRouter = express.Router();
// var category = require('../models/Category'


const ProductModel = require('../models/Product');

productRouter.get('', (req: any, res: any) => {

});

productRouter.get('/:id', (req: any, res: any) => {

});

productRouter.post('', async (req: any, res: any) => {

    const {name, qty, number, price} = req.body;

    if(!name || !qty || !number || !price) {
        res.status(422).json({error: "Todos os campos são obrigatórios!"});
    }

    const product = new ProductModel({
        name,
        qty,
        number,
        price
    })

    try{
        await ProductModel.create(product);
        res.status(201).json({message: 'Product created on database!'})
    }
    catch(error: any) {
        res.status(500).json({error: error});
    }

});

productRouter.patch('/:id', (req: any, res: any) => {

});

productRouter.delete('/:id', (req: any, res: any) => {

});

module.exports = productRouter;
