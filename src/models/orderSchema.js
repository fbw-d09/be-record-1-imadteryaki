const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    username: String, 
    recordstitle: String,
    quantity: Number

});

const Order = mongoose.model('Order', orderSchema,'orders');

module.exports = { Order };
