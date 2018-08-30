const {mongoose} = require('./../db/mongoose');
const {ObjectId} = require('mongodb');
const {Todo} = require('./../model/todo');

var id = '5b87070e3c10cf1151c9872';

if(!ObjectId.isValid(id)){
    console.log('ID not valid');
}

//finding todos
// Todo.find({
//     _id : id
// }).then((todos)=>{
//     console.log('Showing all todos', todos);
// });

// find by id
// specifically for finding by id
Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('id not found');
    }
    console.log('Showing todo',todo);
}).catch((e)=>{console.log(e)});

// find one
// search todo with parameters other than id
// Todo.findOne({
//     _id : id
// }).then((todo)=>{
//     console.log('Showing todo',todo);
// });