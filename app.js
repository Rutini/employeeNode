const express = require('express');
const app = express();

const dataBase = require('./dataBase').getInstance();
dataBase.setModels();

const apiRouter = require('./routes/apiRouter');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use('/api', apiRouter);

app.listen(3000, err => {
    if (err) console.log(err);
    else console.log('Listening 3000...');
});
