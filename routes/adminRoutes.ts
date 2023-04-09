var express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AdminModel = require('../models/Admin');

// router.get('/auth/login', (req: any, res: any) => {
//     const admins =
//     return admins;
// })

router.post('/register', async (req: any, res: any) => {

    const {email, password} = req.body;

    if(!email || !password) {
        res.status(422).json({error: "Email e senha são obrigatórios!"})
    };

    if(!isValidEmail(email)) {
        res.status(400).json({ error: 'Formato de email inválido!' });
        return;
    }

    if (!isValidPassword(password)) {
        res.status(400).json({ error: 'Senha deve ter no mínimo 8 caracteres!' });
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

router.post('/login', async (req: any, res: any) => {

    const {email, password} = req.body;

    if(!email || !password) {
        res.status(422).json({error: "Email e senha são obrigatórios!"})
    };

    const admin = await AdminModel.findOne({email: email});

    if(!admin) {
        res.status(404).json({error: "Administrador não encontrado!"})
    }

    const checkPassword = await bcrypt.compare(password, admin.password);

    if(!checkPassword) {
        res.status(422).json({error: "Senha inválida!"})
    }

    try {
        const secret = process.env.SECRET;
        const token = jwt.sign(
            {
                id: admin._id,
            },
            secret,
        )
        res.status(200).json({message: 'Autenticação realizada com sucesso', token})

    } catch (error){
        console.error(error);
    }
});

function isValidEmail(email:string) {
    return true;
}

function isValidPassword(password:string) {
    return password.length > 8;
}

module.exports = router;