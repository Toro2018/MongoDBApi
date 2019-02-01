var express = require('express');
var app = express();

var UserRouter = require('./user/UserController');

app.use('/users', UserRouter);
module.exports = app;

