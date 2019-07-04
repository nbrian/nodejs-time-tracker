var jwt = require('jsonwebtoken');
var fs = require('fs');
var config = require('../util/config');
var helper = require('../util/helper');

var login = (req, res) => {
  if( req.body.username === 'admin' && req.body.password === 'admin' ) {
    const user = {id: 1, username: 'admin', name: 'John Doe'}; // admin
    
    res.json({
        id: user.id,
        username: user.username,
        name: user.name,
        jwt: jwt.sign({
            id: 1,
        }, config.JWT_SECRET, { expiresIn: 60000 })
    });
  } else {
      res.status(401).json(helper.errorMessage('Invalid username or password!'));
  }
}

module.exports = login;
