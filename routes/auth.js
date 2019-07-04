var jwt = require('jsonwebtoken');
var config = require('../util/config');
var helper = require('../util/helper');

var auth = (req, res, next) => {
    if( req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization') ) {
        try {
            req.user = jwt.verify(req.headers['authorization'], config.JWT_SECRET);
        } catch(err) {
            return res.status(401).json(helper.errorMessage('Invalid token!'));
        }
    } else {
        return res.status(401).json(helper.errorMessage('No token!'));
    }
    next();
    return;
};

module.exports = auth;