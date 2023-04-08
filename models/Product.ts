const mongoose = require('mongoose');
const Category = require('./Category')

const Product = mongoose.model('Product', {
    id: String,
    categories: Category[],
    name: String,
    qty: Number,
    price: Number
});

module.exports = Product;