const momo = require('mongoose');
const Category = require('./Category')

const Product = momo.model('Product', {
    id: String,
    categories: [Category],
    name: String,
    qty: Number,
    price: Number,
    // createdAt: new Date()
});

module.exports = Product;