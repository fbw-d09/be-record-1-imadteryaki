/* const mongoose = require('mongoose'); */

// Define the record schema
/* const recordSchema = new mongoose.Schema({
  title: { type: String},
  artist: String,
  price: Number,
}); */

/* const Record = mongoose.model('Record', recordSchema, 'records'); */

// Define the order schema
/* const orderSchema = new mongoose.Schema({
  quantity: Number,
  records: [recordSchema], // Reference the record schema here
});
 */
/* const Order = mongoose.model('Order', orderSchema, 'orders'); */

// Define the user schema
/* const userSchema = new mongoose.Schema({
  role: String,
  username: String,
  email: String,
  age: Number,
  password: String,
  country: String,
 /*  order: orderSchema,  */// Reference the order schema here
  /*order:{
    quantity: Number,
    records:[{
      title:String,
      artist:String,
      price:Number
    }]
  }
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = { Record, Order, User };
 */