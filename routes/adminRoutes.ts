var express = require('express');
const router = express.Router();

const AdminModel = require('../models/Admin');

router.post('/auth/login', async (req: any, res: any) => {

    const {email, password} = req.body;

    if(!email) {
        res.status(422).json({error: "Email é obrigatório!"})
    };

    if(!password) {
        res.status(422).json({error: "Senha é obrigatóri!"})
    };

    const admin = {
        email,
        password
    }

    try{
        await AdminModel.create(admin);
        res.status(201).json({message: 'Admin created on database!'})
    }
    catch(error: any) {
        res.status(500).json({error: error});
    }
});

module.exports = router;