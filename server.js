var express = require('express'); 
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;
var app = express();

var toDo = mongoose.model('toDo', {
  text: String,
  complete: Boolean
});