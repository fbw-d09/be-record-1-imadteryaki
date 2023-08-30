const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role:String,
  username: { type:String, unique: true },
  email: String,
  age: Number,
  password: String,
  country: String
});

const User = mongoose.model('User', userSchema,'users');

module.exports = { User }; 
