const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('User',{
    email : {
        required : true,
        minlength : 1,
        type : String,
        trim : true,
        unique: true,
        validator : validator.isEmail,
        message : "{value} is not a valid email"
    },
    password : {
        required : true,
        minlength : 6,
        type : String
    },
    tokens : [{
        acess : {
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