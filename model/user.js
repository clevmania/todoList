const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('User',{
    email : {
        required : true,
        minlength : 1,
        type : String,
        trim : true,
        unique: true,
        validate : {
            validator : validator.isEmail,
            message : "{value} is not a valid email"
        }
    },
    password : {
        required : true,
        minlength : 6,
        type : String
    },
    tokens : [{
        access : {
            type : String,
            required : String
        },
        token : {
            type : String,
            required : true
        }
    }]
})

module.exports = {User};