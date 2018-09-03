const bodyParser = require('body-parser');
const express = require('express');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./model/todo');
var {User} = require('./model/user');

// create an express application
var app = express();

// dynamically config port
const port = process.env.port || 3000;

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
});

// route to fetch individual todo
app.get('/todos/:id',(req,res)=>{
    var id = req.params.id
    if(!ObjectID.isValid(req.params.id)){
        return res.status(404).send();
    }
    Todo.findById(req.params.id).then((todo)=>{
        if(!todo){
            res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{res.status(400).send()});
});

// route for deleting individual todo
app.delete('/todos/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(req.params.id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send(todo);
    }).catch((e)=>{res.status(400).send()});
});

// route for updating todos
app.patch('/todos/:id',(req,res)=>{
    var body = _.pick(req.body, ['text','completed']);

    if(!ObjectID.isValid(req.params.id)){
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed)&& body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(req.params.id,{$set:body},{new : true}).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send(todo)
    }).catch((e)=>{res.status(400).send(e)});
});

// route for creating a user
app.post('/users',(req,res)=>{
    var body = _.pick(req.body,['email','password']);
    var user = new User(body);
    user.save().then(()=>{
        // if(!info){
        //     return res.status(404).send();
        // }
        return user.generateAuthToken();

        // res.send("User created");
    }).then((token)=>{
        res.header('x-auth',token).send(user);
    })
    .catch((e)=>{res.status(400).send(e)});
});

// listening for services
app.listen(port,()=>{
    console.log('Started listening for services');
});