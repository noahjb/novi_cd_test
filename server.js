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
mongoose.connect('mongodb://localhost/app');

// DEFINE MONGOOSE SCHEMA
var toDoSchema = new mongoose.Schema({
  text: {type: String, default: ''},
  complete: {type: Boolean, default: false}
});

// DEFINE MONGOOSE MODEL
var ToDo = mongoose.model('ToDo', toDoSchema);

// Set up the `/GET` route for `/api/todos`

// Set up the `/POST` route for `/api/todos`

// Set up the `/DELETE` route for `/api/todos/:todo_id`

// Set up the GET route handler for all otherwise unspecified routes. 
// This will render the HTML page.

app.listen(port); 
console.log("App listening on port: ", port);

