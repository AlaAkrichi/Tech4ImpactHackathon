const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const SECRET = 'your_secret_key';
const {loginuser,registeruser} = require('../controllers/Authentificationcontroller');

router.use(cors({
  credentials: true,
  origin: '*',
}));
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this will hold the sign in logic  ');
});
router.post('/register',registeruser);
router.post("/login",loginuser)
module.exports = router;
