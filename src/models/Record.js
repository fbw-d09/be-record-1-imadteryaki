const mongoose = require('mongoose');

const {Schema} = mongoose;

const recordSchema = mongoose.Schema({
    title:String,
    artist:String,
    year:Number,
    price:Number
})

module.exports = mongoose.model('Record', recordSchema,'records')