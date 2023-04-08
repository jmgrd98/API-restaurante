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
    const admin = {
        email,
        password
    }

    try{
        await AdminModel.create(admin);
        res.status(201)
    }
    catch(error: any) {
        res.status(500).json(error);
    }
});

mongo.connect('mongodb+srv://jmgrd98:ilovecode98@apicluster0.y7vkluv.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('API conectada no MongoDB');
        app.listen(3000);
    })
    .catch((error: any) => console.error(error))