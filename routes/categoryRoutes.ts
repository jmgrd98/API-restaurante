var express = require('express');
const categoryRouter = express.Router();
const Category = require('../models/Category').Category;

categoryRouter.get('', async (req: any, res: any) => {
    
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
})

categoryRouter.get('/:id', async (req: any, res: any) => {

    const id = req.params.id;

    try {
        const category = await Category.findOne({_id: id});
        res.status(200).json(category);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
})

module.exports = categoryRouter;