const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    institution: {type: String, required: true},
    yearOfstudy: {type: String, required: true},
    major: {type: String, required: true}
})
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
