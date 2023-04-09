const mong = require('mongoose');

const Admin = mong.model('Admin', {
    id: String,
    email: String,
    password: String,
    // createdAt: new Date()
});

module.exports = Admin;