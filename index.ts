const express = require('express');
const app = express();

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

app.listen(3000);