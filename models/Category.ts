const mongoose = require('mongoose');

const Category = mongoose.model('Category', {
    id: String,
    parent: String,
    name: String
});

module.exports = Category;