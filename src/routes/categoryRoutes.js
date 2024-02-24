var express = require('express');
const categoryRouter = express.Router();
const CategoryModel = require('../models/Category');

categoryRouter.get('', async (req, res) => {
    
    CategoryModel.find()
            .then((categories) => {
                res.status(200).json(categories);
            })
            .catch((error) => {
                res.status(500).json({error: error});
            })
})

categoryRouter.get('/:id', async (req, res) => {

    const id = req.params.id;


    CategoryModel.findById(id)
            .then((category) => {
                res.status(200).json(category);
            })
            .catch((error) => {
                res.status(500).json({error: error});
            })
})

module.exports = categoryRouter;