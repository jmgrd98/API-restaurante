var express = require('express');
const app = express();
const mongo = require('mongoose');
import * as dotenv from 'dotenv';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

dotenv.config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);

app.get('/category', (req: any, res: any) => {

})

mongo.connect(`mongodb+srv://${dbUser}:${dbPassword}@apicluster0.y7vkluv.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('API conectada no MongoDB');
        app.listen(3000);
    })
    .catch((error: any) => console.error(error))