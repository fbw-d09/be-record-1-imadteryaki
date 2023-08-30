const mongoose = require('mongoose');


const recordSchema = new mongoose.Schema({
  title: {type:String, unique:true },
  artist: String,
  price: Number
});


const Record = mongoose.model('Record', recordSchema,'records');

module.exports = { Record }; 
