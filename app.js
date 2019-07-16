const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.FRONT_HOST);
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

const apiRouter = require('./routes/apiRouter');

const morgan = require('morgan');
app.use(morgan('dev'));

app.use('/api', apiRouter);

app.use('*', (req, res) => {
    res.status(404).json({msg: 'Not found!'})
});

app.listen(3000, err => {
    err ? console.log(err) : console.log('Listening on 3000...');
});
