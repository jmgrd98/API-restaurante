var express = require('express');
const categoryRouter = express.Router();
var category = require('../models/Category')

categoryRouter.get('/', (req: any, res: any) => {
    return [category];
})

module.exports = categoryRouter;