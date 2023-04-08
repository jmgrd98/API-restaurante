const express = require('express');
const app = express();
const mongo = require('mongoose');

mongo.connect('mongodb+srv://jmgrd98:ilovecode98@apicluster0.y7vkluv.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('API conectada no MongoDB');
        app.listen(3000);
    })
    .catch((error: any) => console.error(error))