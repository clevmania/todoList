const bodyParser = require('body-parser');
const express = require('express');

const mongoose = require('./db/mongoose');
const todo = require('./model/todo');
const user = require('./model/user');

// create an express application
var app = express();

// make use of middle ware
app.use(bodyParser.json());

// route to post todo
app.post('/todo',(req,res)=>{
    var todo = new todo({
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
    todo.find().then((todos)=>{
        res.send(todos);
    },(err)=>{
        res.status(400).send(err);
    });
})

// listening for services
app.listen(3000,()=>{
    console.log('Started listening for services');
});