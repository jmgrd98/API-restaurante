const mong = require('mongoose');

const Admin = mong.model('Admin', {
    id: Number,
    email: String,
    password: String,
    // createdAt: new Date()
});

module.exports = Admin;