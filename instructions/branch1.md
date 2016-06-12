# Setting up API Routes and Angular Routes

## Creating a RESTful API
We will create routes on the server to so it knows what to do whenever it receives an HTTP request for a particular URL.

|HTTP Verb| URL | Action  |
|---|---|---|
| GET  | /api/todos   | retrieve all of the items from the database  |
| POST |  /api/todos |  add a new item to the database |
| DELETE | /api/todos/:todo_id   |  delete a single item from the database |

Inside each route, we'll use methods provided to us by Mongoose in order to retrieve and manipulate data within the Mongo Database.

In your `server.js` file, above the `app.listen()` line, complete the following:

- [ ] Set up the `/GET` route for `/api/todos`
  -
- [ ] Set up the `/POST` route for `/api/todos`
  -
- [ ] Set up the `/DELETE` route for `/api/todos/:todo_id`
  - 
  
