const bodyParser = require('body-parser');
const express = require('express');

const mongoose = require('./db/mongoose');
const todo = require('./model/todo');
const user = require('./model/user');

// create an express application
var app = express();

// listening for services
app.listen(3000,()=>{
    console.log('Started listening for services');
});