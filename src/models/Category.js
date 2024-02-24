const mongolose = require('mongoose');

const Category = mongolose.model('Category', {
    id: String,
    parent: String,
    name: String,
    createdAt: Date,
});

module.exports = Category;