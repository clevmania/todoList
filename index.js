const bodyParser = require('body-parser');
const express = require('express');

const mongoose = require('./db/mongoose');
const todo = require('./model/todo');
const user = require('./model/user');