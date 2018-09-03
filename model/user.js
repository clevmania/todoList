const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

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

UserSchema.methods.generateAuthToken = function(){
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id : user._id.toHeXString(), access},'abc123').toString();

    user.tokens.push({access,token});

    user.save().then(()=>{
        return token;
    });
};

module.exports = {User};