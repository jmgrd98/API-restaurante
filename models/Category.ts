const mongolose = require('mongoose');

export const Category = mongolose.model('Category', {
    id: String,
    parent: String,
    name: String,
    // createdAt: new Date()
});

module.exports = Category;