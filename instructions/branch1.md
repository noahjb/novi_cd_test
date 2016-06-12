# Setting up API Routes and Angular Routes

## Creating a RESTful API
We will create routes on the server to let the server know what we need to do whenever we receive an HTTP request for a particular URL.

|HTTP Verb| URL | Action  |
|---|---|---|
| GET  | /api/todos   | retrieve all of the items from the database  |
| POST |  /api/todos |  add a new item to the database |
| DELETE | /api/todos/:todo_id   |  delete a single item from the database |

Inside each route, we'll use methods provided to us by Mongoose in order to retrieve and manipulate data within the Mongo Database.

In your `routes.js` file, complete the following:

- [ ] Set up the `/GET` route for `/api/todos/`
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
- [ ] Set up the `/POST` route for `/api/todos/`
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
- [ ] Set up the `/DELETE` route for `/api/todos/:todo_id`
        app.delete('/api/todos/:todo_id', function(request, response){
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
  