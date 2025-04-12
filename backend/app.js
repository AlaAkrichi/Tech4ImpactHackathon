const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const path = require('path');
const app = express()
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
//database connection
mongoose.connect('mongodb://localhost:27017/igames')
.then(()=>{  console.log('connected to mongoDB')})
.catch((err)=>{
    console.log('connection error',err)})

const port = process.env.PORT || 3000

//middleware
app.use(express.json());



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/authentification', require('./routes/AuthentificationRoutes'));

app.listen(port,()=>{
    console.log(`server strated at http://localhost:${port}`)
})


module.exports = app;