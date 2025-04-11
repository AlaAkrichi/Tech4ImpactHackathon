const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const port = process.env.PORT || 3000

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/authentification', require('./routes/AuthentificationRoutes'));

app.listen(port,()=>{
    console.log(`server strated on http://localhost:${port}`)
})


module.exports = app;
