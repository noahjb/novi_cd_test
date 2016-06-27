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
app.get('/api/todos', function(request, response){
  // Use Mongoose's .find() method to retrieve all todos from database
  ToDo.find(function(err, todos){
    // Error handling - if we receive an error from Mongo, send it back as a response. Nothing after res.send(err) will execute
    if (err) {
      response.send(err);
    }
    // If no error, respond with the todos as a json object
    response.json(todos);
  });
});

// Set up the `/POST` route for `/api/todos`
app.post('/api/todos', function(request, response){
  // Use Mongoose's .create() method to create a new item. 
  ToDo.create({
    // The text comes from the AJAX request sent from Angular.
    text: request.body.text,
    complete: false
  }, function(err, todo){
    // Error Handling
    if (err) { 
      response.send(err); 
    }
    // Retrieve all Todos after creating another 
    ToDo.find(function(err, todos){
      if (err) {
        response.send(err);
      }
      response.json(todos);
    });
  });
});

// Set up the `/DELETE` route for `/api/todos/:todo_id`
app.delete('/api/todos/:todo_id', function(request, response){
  console.log("IN REQ HANDLER", request.params)
  // Use Mongoose's ToDo.remove() function to remove one from the database
  ToDo.remove({
    _id: request.params.todo_id
  }, function(err, todo){
    if (err) {
      response.send(err);
    }
    // Retrieve all Todos after deleting one
    ToDo.find(function(err, todos){
      if (err) {
        response.send(err);
      }
      response.json(todos);
    });
  });
});

app.put('/api/todos/:todo_id', function(request, response){

  // Use the findByIdAndUpdate function to update the document in the database
  console.log(request.body.complete);
  ToDo.findByIdAndUpdate(request.params.todo_id, {$set: {text: request.body.text, complete:request.body.complete }}, function(err, todo){
    if (err) {
      response.send(err);
    }
  });

});

// Set up the GET route handler for all otherwise unspecified routes. This will render the HTML page.
app.get('*', function(request, response){
  // __dirname is a keyword that pulls the absolute path to the current file
  response.sendFile(__dirname + '/public/index.html');
});

app.listen(port); 
console.log("App listening on port: ", port);