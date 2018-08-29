var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text : {
        required : true,
        minlength : 1,
        type : String,
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    completedAt : {
        type : Number,
        default : Null
    }
})

module.exports = {Todo};