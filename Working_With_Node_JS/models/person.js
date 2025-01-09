const mongoose = require('mongoose')

//Define person schema
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work:{
        type: String,
        enum: ['Chef', 'Waiter', 'Manager'],
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    },
    salary: {
        type: Number,
        required: true
    }

})

//Create Person model
const person = mongoose.model('person', personSchema)
module.exports = person