const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

app.use(bodyParser.json());

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.use(routes);
module.exports = app;
