const mongolose = require('mongoose');

export const Category = mongolose.model('Category', {
    id: String,
    parent: String,
    name: String,
    createdAt: Date,
});

module.exports = Category;