const mongoose = require('mongoose');
const validator = require('validator');

var UserSchema = new mongoose.Schema({
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
});

var User = mongoose.model('User',UserSchema);

module.exports = {User};