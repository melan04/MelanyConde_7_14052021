const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter').router;

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get ('/', function (req,res,next) {
res.setHeader('Content-Type', 'text/html');
res.status(200).send('<h1>Bonjour dans mon super server</h1>');
});

app.use('/api/',apiRouter);

module.exports = app;