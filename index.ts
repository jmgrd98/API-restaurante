var express = require('express');
const app = express();
const mongo = require('mongoose');

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);

app.get('/', (req: any, res: any) => {

    res.json({message: "Hello, World!"})
});


app.get('/category', (req: any, res: any) => {

})

mongo.connect('mongodb+srv://jmgrd98:ilovecode98@apicluster0.y7vkluv.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('API conectada no MongoDB');
        app.listen(3000);
    })
    .catch((error: any) => console.error(error))