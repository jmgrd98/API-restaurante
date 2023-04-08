const express = require('express');
const app = express();
const mongo = require('mongoose');

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

mongo.connect('mongodb+srv://jmgrd98:ilovecode98@apicluster0.y7vkluv.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('API conectada no MongoDB');
        app.listen(3000);
    })
    .catch((error: any) => console.error(error))