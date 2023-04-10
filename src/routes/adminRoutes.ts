var express = require('express');
const adminRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AdminModel = require('../models/Admin');

adminRouter.get('', (req: any, res: any) => {
    
    AdminModel.find()
            .then((admins: any) => {
                res.status(200).json(admins);
            })
            .catch((error: any) => {
                res.status(500).json({error: error});
            })

})

adminRouter.post('/register', async (req: any, res: any) => {

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

adminRouter.post('/login', async (req: any, res: any) => {

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

adminRouter.patch('/admin/:id', async (req: any, res: any) => {

    const id = req.params.id;
    const {email, password} = req.body;

    const admin = new AdminModel({
        _id: id,
        email,
        password
    });

    try {
        await AdminModel.updateOne({_id: id}, admin);
        res.status(201).json({message: 'Admin updated on database!'})
    }
    catch (error: any) {
        res.status(500).json({error: error});
    }
});

adminRouter.delete('/admin/:id', async (req: any, res: any) => {

    const id = req.params.id;

    try {
        await AdminModel.deleteOne({_id: id});
        res.status(201).json({message: 'Admin deleted on database!'})
    }
    catch (error: any) {
        res.status(500).json({error: error});
    }
});

module.exports = adminRouter;