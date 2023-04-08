var express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const AdminModel = require('../models/Admin');

router.post('/auth/login', async (req: any, res: any) => {

    const {email, password} = req.body;

    if(!email) {
        res.status(422).json({error: "Email é obrigatório!"})
    };

    if(!password) {
        res.status(422).json({error: "Senha é obrigatória!"})
    };

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

module.exports = router;