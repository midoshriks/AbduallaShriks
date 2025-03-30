const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    //// firstname:{
    ////     type: String,
    ////     required: true
    //// },
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    age: Number,
    country: String,
    gender: String,
},
    { timestamps: true }
);

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;