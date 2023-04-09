var express = require('express');
const router = express.Router();
const category = require('../models/Category')

router.get('/', (req: any, res: any) => {
    return category.find();
})