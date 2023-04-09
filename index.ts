var express = require('express');
const app = express();
const mongo = require('mongoose');
import * as dotenv from 'dotenv';

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
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/auth', adminRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);

mongo.connect(`mongodb+srv://${dbUser}:${dbPassword}@apicluster0.y7vkluv.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('API conectada no MongoDB');
        app.listen(3000);
    })
    .catch((error: any) => console.error(error))