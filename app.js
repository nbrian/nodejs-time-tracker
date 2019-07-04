var express = require('express');

var authRoute = require('./routes/auth');
var loginRoute = require('./routes/login');
var usersRoute = require('./routes/users');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/login', loginRoute); // generate token
app.use('/api', authRoute); // secure routes
app.use('/api/users', usersRoute); // secured route

module.exports = app;
