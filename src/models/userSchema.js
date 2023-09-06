const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role:String,
  username:String ,
  email: String,
  age: Number,
  password: String,
  country: String
});

const User = mongoose.model('User', userSchema,'users');

module.exports = { User }; 
