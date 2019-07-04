var express = require('express');

var authRoute = require('./routes/auth');
var loginRoute = require('./routes/login');
var usersRoute = require('./routes/users');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/time-tracker/login', loginRoute); // generate token
app.use('/time-tracker/api', authRoute); // secure routes
app.use('/time-tracker/api/users', usersRoute); // secured route

module.exports = app;
