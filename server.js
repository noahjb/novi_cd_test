// Define variables to hold all of the imported modules.
var express = require('express'); 
var mongoose = require('mongoose'); // Mongoose is an ORM for MongoDB
var bodyParser = require('body-parser'); // Middleware that parses JSON
var morgan = require('morgan'); // Middleware that logs HTTP requests to the console
var methodOverride = require('method-override'); 

var port = process.env.PORT || 8080; // Defining the port that we're going to be using
var app = express(); // Creating the application with express

app.use(express.static(__dirname + '/public')); // Sets the location of the static files that we'll be serving
app.use(morgan('dev')); // Logs every HTTP request to the console
app.use(bodyParser.json()); // Parses app

// CONNECT TO MONGO/MONGOOSE

// DEFINE MONGOOSE MODELS

app.listen(port); 
console.log("App listening on port: ", port);

