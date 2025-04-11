var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this will hold the sign in logic  ');
});

module.exports = router;
