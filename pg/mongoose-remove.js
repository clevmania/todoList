const {mongoose} = require('./../db/mongoose');
const {ObjectId} = require('mongodb');
const {Todo} = require('./../model/todo');

var id = '5b876857381c54ae8d33531f';

if(!ObjectId.isValid(id)){
    console.log('ID not valid');
}

//removing all todo
// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// find one and remove
// Todo.findOneAndRemove({_id : id}).then((doc)=>{
//     console.log('removed one todo',doc);
// });

// find by id and remove
Todo.findByIdAndRemove(id).then((doc)=>{
    console.log('removed todo',doc);
});