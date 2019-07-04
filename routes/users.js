var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res) {
  fs.readFile('./data/users.json', (err, json) => {
    if (err) throw err;
    let obj = JSON.parse(json);
    res.json(obj);
  });
});

module.exports = router;
