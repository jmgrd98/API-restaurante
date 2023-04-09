import * as mongoose from "mongoose";

var express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const AdminModel = require('../models/Admin');

// router.get('/auth/login', (req: any, res: any) => {
//     const admins =
//     return admins;
// })

router.post('/auth/register', async (req: any, res: any) => {

    const {email, password} = req.body;

    if(!email || !password) {
        res.status(422).json({error: "Email e senha são obrigatórios!"})
    };

    if(!isValidEmail(email)) {
        res.status(400).json({ error: 'Invalid email format' });
        return;
    }

    if (!isValidPassword(password)) {
        res.status(400).json({ error: 'Password should be at least 8 characters long' });
        return;
    }

    const adminExists = await AdminModel.findOne({email: email});

    if(adminExists) {
        res.status(422).json({error: "Esse email já está cadastrado!"})
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const admin = new AdminModel({
        email,
        password: passwordHash
    })

    try{
        await AdminModel.create(admin);
        res.status(201).json({message: 'Admin created on database!'})
    }
    catch(error: any) {
        res.status(500).json({error: error});
    }
});

router.post('/auth/login', (req: any, res: any) => {

});

function isValidEmail(email) {
    return true;
}

function isValidPassword(password) {
    return password.length > 8;
}

module.exports = router;