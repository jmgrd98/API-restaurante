var express = require('express');
const productRouter = express.Router();
// var category = require('../models/Category'


const ProductModel = require('../models/Product');

productRouter.get('', (req: any, res: any) => {
    
        ProductModel.find()
            .then((products: any) => {
                res.status(200).json(products);
            })
            .catch((error: any) => {
                res.status(500).json({error: error});
            })
});

productRouter.get('/:id', (req: any, res: any) => {
    
        const id = req.params.id;
    
        ProductModel.findById(id)
            .then((product: any) => {
                res.status(200).json(product);
            })
            .catch((error: any) => {
                res.status(500).json({error: error});
            })
});

productRouter.post('', async (req: any, res: any) => {

    const {name, qty, price} = req.body;

    if(!name || !qty || !price) {
        res.status(422).json({error: "Todos os campos são obrigatórios!"});
    }

    const product = new ProductModel({
        name,
        qty,
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

productRouter.patch('/:id', async (req: any, res: any) => {

    const id = req.params.id;
    const {name, qty, price} = req.body;

    const product = new ProductModel({
        _id: id,
        name,
        qty,
        price
    });

    try {
        // const updatedProduct = await ProductModel.updatedOne({_id: id}, product);
        await ProductModel.updateOne({_id: id}, product);
        res.status(201).json({message: 'Product updated on database!'})
    }
    catch (error: any) {
        res.status(500).json({error: error});
    }
});

productRouter.delete('/:id', async (req: any, res: any) => {

    const id = req.params.id;

    try {
        await ProductModel.deleteOne({_id: id});
        res.status(201).json({message: 'Product deleted on database!'})
    }
    catch (error: any) {
        res.status(500).json({error: error});
    }
});

module.exports = productRouter;
