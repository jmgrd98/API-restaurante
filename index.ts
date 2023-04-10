var express = require('express');
const app = express();
const mongo = require('mongoose');
const cors = require('cors');
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';
import * as dotenv from 'dotenv';

app.use(cors());

dotenv.config();
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

const adminRoutes = require('./src/routes/adminRoutes');
const categoryRoutes = require('./src/routes/categoryRoutes');
const productRoutes = require('./src/routes/productRoutes');

app.use('/auth', adminRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(require("./swagger.json")));

mongo.connect(`mongodb+srv://${dbUser}:${dbPassword}@apicluster0.y7vkluv.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('API conectada no MongoDB');
        app.listen(3000);
    })
    .catch((error: any) => console.error(error))