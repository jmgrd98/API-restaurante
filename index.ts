const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(
    express.urlencoded({
        extender: true,
    }),
);


app.use(express.json());

app.get('/', (req: any, res: any) => {

    res.json({message: "Hello, World!"})
});

app.post('/auth/login', (req: any, res: any) => {

});

mongoose.connect('mongodb+srv://jmgrd98:ilovecode98@apicluster0.y7vkluv.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('API conectada no MongoDB');
        app.listen(3000);
    })
    .catch((error: any) => console.error(error))