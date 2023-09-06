require('dotenv').config();
const mongoose = require('mongoose');

exports.connect = async () =>
{
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/records");

        console.log(`MongoDB is connected on ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

exports.closeConnection = () => process.exit(0);