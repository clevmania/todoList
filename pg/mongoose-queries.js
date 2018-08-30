const {mongoose} = require('./../db/mongoose');
const {Todo} = require('./../model/todo');

var id = '5b87070e3c10cf1151c9872';

//finding todos
Todo.find({_id : id}).then((todos)=>{
    console.log('Showing all todos', todos);
},(err)=>{
    console.log('could not find todo',err);
});

// find by id
// specifically for finding by id
Todo.findById(did).then((todo)=>{
    console.log('Showing todo',todo);
},(err)=>{
    console.log('could not show todo',err);
});

// find one
// search todo with parameters other than id
Todo.findOne({_id : id}).then((todo)=>{
    console.log('Showing todo',todo);
});