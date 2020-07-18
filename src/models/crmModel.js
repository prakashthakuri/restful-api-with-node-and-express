
//This is my Schema Setup

const mongoose = require('mongoose')

const Schema = mongoose.Schema

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'    
    },
    lastName: {
        type: String,
        required: 'Enter a last name'    
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    create_date: {
        type: Date,
        default: Date.now
    }
    
})
