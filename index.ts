const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extender: true,
    }),
);

app.use(express.json());

