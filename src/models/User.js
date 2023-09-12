const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: String,
    admin: Number,
    password: String,
})

module.exports = mongoose.model('User', userSchema,'users');