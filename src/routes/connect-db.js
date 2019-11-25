const mongoose = require ("mongoose");
const config = require('../../config');

const DB = "mongodb+srv://Kate:(Test)(1)@product-delivery-fufgk.mongodb.net/test?retryWrites=true"

const connectDB = () => {
    mongoose.connect(DB, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', () => {
        console.log('error connect db');
    });
    db.once("open", () => {
        console.log("connect db");
    });
};


module.exports = connectDB;


