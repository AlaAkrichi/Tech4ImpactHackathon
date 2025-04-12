const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const cors = require('cors');
const {test,registeruser} = require('../controllers/Authentificationcontroller');

router.use(cors({
  credentials: true,
  origin: 'npm',
}));
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this will hold the sign in logic  ');
});
router.post('/register', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    institution,
    yearOfStudy,
    major
  } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      institution,
      yearOfStudy,
      major
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});
module.exports = router;
