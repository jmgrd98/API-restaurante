const mong = require('mongoose');

const Admin = mong.model('Admin', {
    id: String,
    email: String,
    password: String,
    createdAt: Date,
});

module.exports = Admin;