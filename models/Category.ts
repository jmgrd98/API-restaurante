const mongoose = require('mongoose');

const Category = mongoose.model('Category', {
    id: String,
    parent: Category | null;
    name: String
});

module.exports = Category;