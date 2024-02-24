const momo = require('mongoose');
const Category = require('./Category')

const Product = momo.model('Product', {
    id: String,
    categories: [Category.schema],
    name: String,
    qty: Number,
    price: Number,
    createdAt: Date,
});

module.exports = Product;