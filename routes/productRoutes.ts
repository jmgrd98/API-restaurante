var express = require('express');
const productRouter = express.Router();
var category = require('../models/Category')

productRouter.get('', (req: any, res: any) => {

});

productRouter.get('/:id', (req: any, res: any) => {

});

productRouter.post('', (req: any, res: any) => {

    const {categories, name, qty, number, price} = req.body;

    if(!name || !qty || !number || !price) {
        res.status(422).json({error: "Todos os campos são obrigatórios!"});
    }
});

productRouter.patch('/:id', (req: any, res: any) => {

});

productRouter.delete('/:id', (req: any, res: any) => {

});

module.exports = productRouter;
