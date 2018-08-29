var mongoose = require('mongoose');

var User = mongoose.model('User',{
    email : {
        required : true,
        minlength : 1,
        type : String
    },
    password : {
        required : true,
        minlength : 1,
        type : String
    }
})

module.exports = {User};