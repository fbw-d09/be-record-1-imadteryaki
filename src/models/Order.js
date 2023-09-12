const mongoose = require('mongoose');

const {Schema} = mongoose;

const orderSchema = mongoose.Schema({
    quantity :Number
})

module.exports = mongoose.model('Order', orderSchema,'orders')