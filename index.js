var bodyParser = require('body-parser');
var express = require('express');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/todo');
var {user} = require('./model/user');

// create an express application
var app = express();

// make use of middle ware
app.use(bodyParser.json());

// route to post todo
app.post('/todos',(req,res)=>{
    var todo = new Todo({
        text : req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    })
});

// route to find todos
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send(todos);
    },(err)=>{
        res.status(400).send(err);
    });
})

// listening for services
app.listen(3000,()=>{
    console.log('Started listening for services');
});