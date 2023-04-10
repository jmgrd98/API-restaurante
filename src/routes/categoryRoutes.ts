import { Category } from './../models/Category';
var express = require('express');
const categoryRouter = express.Router();
const CategoryModel = require('../models/Category');

categoryRouter.get('', async (req: any, res: any) => {
    
    CategoryModel.find()
            .then((categories: any) => {
                res.status(200).json(categories);
            })
            .catch((error: any) => {
                res.status(500).json({error: error});
            })
})

categoryRouter.get('/:id', async (req: any, res: any) => {

    const id = req.params.id;


    CategoryModel.findById(id)
            .then((category: any) => {
                res.status(200).json(category);
            })
            .catch((error: any) => {
                res.status(500).json({error: error});
            })
})

module.exports = categoryRouter;