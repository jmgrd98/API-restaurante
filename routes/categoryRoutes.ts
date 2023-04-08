var express = require('express');
const router = express.Router();
const category = require('../models/Category')

router.get('/category', (req: any, res: any) => {
    return category.find();
})