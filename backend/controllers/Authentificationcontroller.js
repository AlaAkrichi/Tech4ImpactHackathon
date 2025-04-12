const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/user")
const test = (req,res)=>{

    res.json({message: "test is working"})
}
const  registeruser = asyncHandler (async(req, res)=>{
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
            firstname:firstName,
            lastname:lastName,
            email:email,
            password: hashedPassword,
            institution:institution,
            yearOfstudy:yearOfStudy,
            major:major
          });
      
          const user = await newUser.save();
          const Token= makeToken(user._id,user.email)
      
          res.status(200).json({ token: Token });
        } catch (error) {
          console.error('Registration error:', error);
          res.status(500).json({ message: 'Server error during registration' });
        }
}) 

const loginUser = asyncHandler(async(req,res)=>{
    //logic login lena 
})
const makeToken = (id, email) => {
    return jwt.sign({ id, email }, process.env.JWT_SECRET, {
      expiresIn: "5d",
    });
  };
  //login user
  const  loginuser = asyncHandler (async(req, res)=>{
    const { email, password } = req.body;

    try {
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ message: 'User not found' });
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
  
      // Optional: generate a token
      const token = makeToken(user._id,user.email)
  
      // Send response
      res.status(200).json({
        message: 'Login successful',
        token, // optional
        user: {
          id: user._id,
          firstName: user.firstname,
          lastName: user.lastname,
          email: user.email,
          institution: user.institution,
          yearOfStudy: user.yearOfstudy,
          major: user.major
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error during login' });
    }
  });

  


module.exports = {test,registeruser,loginuser}
