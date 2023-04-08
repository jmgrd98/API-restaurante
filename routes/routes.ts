const express = require('express');
const app = express();

const AdminModel = require('./models/Admin');

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.get('/', (req: any, res: any) => {

    res.json({message: "Hello, World!"})
});

app.post('/auth/login', async (req: any, res: any) => {

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

app.get('/category', (req: any, res: any) => {

})