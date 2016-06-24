# Creating Angular Front-End

In this section, we'll simultaneously create the HTML and Angular code. These work together to render the application.

## Defining a Controller

Angular Controllers control the data flow within Angular applications. Angular has many services that can be injected into controllers to be used within the controller code. So, we can inject only the services that we need. Our controller will use the `$scope` service to store properties and functions that will be available to the HTML. We'll use the `$http` service to make AJAX requests to our server.

- [ ] Now we are going to create a controller and render it. The files we'll be using are both under the **public** folder.
![](http://i67.tinypic.com/2507879.jpg)

  In `main.js`, we've created a function called `mainController`. It will take two arguments, `$scope` and `$http`:
    
          function mainController($scope, $http) {}

  In `index.html`, we need to define the use of the `mainController`. Not sure how to do this? You shoule see there is a <body> block in `index.html`, and just add code within the <body> to make it look like this:

          <body ng-controller="mainController">
            <div class="container">
            </div>
          </body>

  Now we go back to `main.js`. On the controller, define an object to store the form data. It will live on the $scope object. 

          $scope.formData = {};
          

  In `index.html`, let's create a form element that we'll use to enter new values into the todo list. Within the `container` `div`, let's add a simple form element. You may need to format the code to make the structure clear.
          
          <div id="todo-form" class="row">
              <div class="col-sm-8 col-sm-offset-2 text-center">
                  <form> 
                      <div class="form-group">
                          <input type="text" class="form-control input-lg text-center" placeholder="learn web dev with angular" ng-model='formData.text'>
                      </div>
                  </form>
              </div>
          </div>

  Notice how in the `<input>` element, we have a tag that says `ng-model='formData.text'`. [ngModel is an Angular directive](https://docs.angularjs.org/api/ng/directive/ngModel) that will bind the value in the input form to a property on the provided model. In this case, we're storing it on the `text` property of the `formData` object that lives on the `$scope` that we defined in the `mainController`. The `$scope` object defined in the controller is available to us from within the HTML block that references that controller. Later, we'll add a button to the form that will save the form data to the database.

## Setting up Controller Methods

### GET the page

When we load the `mainController`, the first thing we'll do is send an HTTP request to the server in order to get all of the todo items from the database. 

In the server, we built a request handler `app.get('/api/todos'...` that returns all of the todos from the database. Let's write the client-side code that will interact with that endpoint.

`$http` is a core Angular service that comes with helper functions that facilitate communication with HTTP servers. `$http` takes a single argument - a configuration object - that is used to generate an HTTP request and it returns a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). A promise is an object that represents an operation that hasn't completed yet, but is expected in the future. Because the HTTP request is Asyncronous, we use a Promise to associate handlers with the eventual success or failure of this HTTP request.

To do this, we need to send an HTTP request to the server to gather all of the todos in the database. In `mainController`, let's make an HTTP GET request:

    $http({
      method: 'GET',
      url: '/api/todos'
    }).then(function successCallback(response){
      // Called asyncronously when the response is available, if no error
    }, function errorCallback(response){
      // Called asyncronously if an error occurs or the server returns
      // a response with an error status
    });

After the HTTP request is made, we use the `.then(...)` method to handle the next steps. It takes a success function and an error function. ONE of these will be invoked based on the status of the HTTP request.

On a successful `GET` request to the `/api/todos` route, we'll expect the response to contain an object that has all of the todos that exist in the database. We need to store this response object on the `$scope`. We also need to add some basic error handling in case the `GET` request is a failure.

Let's do the following things. Within the successCallback, store the `response.data` onto the `$scope`. Within the errorCallback, log the error to the console. (Clue: you see in the above code block there are some comment lines - that's where we are going to add new code from the following code block. )
   
    function successCallback(response){
       $scope.todos = response.data;
       console.log("received data from the server:", response);
    }, function errorCallback(response){
      console.log("received an error from the server:", error);
    });

### Status Check

At this point, you should be able to click the RUN button (looks like a play button) on the CodeAnywhere editor. It should open a page that contains a single form element, with your placeholder text. (Note: There might be pop-up blocking in your brower. If so, you will need to unblock it.) 

![](http://i67.tinypic.com/idy5pe.jpg)

Let's open up Chrome Dev Tools and take a look at the Console tab. 

We can see that upon the initial page load, we sent a `GET` request to our own server and then responded with an empty object.

![](http://i64.tinypic.com/21djrit.jpg)

The data property is an array that would normally contain the todo items that exist in the database. As you can see, we currently do not have any todo items in the database.

### Adding items to the database

Let's now write a function that adds an item to the database. This will live as a method on the `$scope` object. Adding the method to the `$scope` object will allow us the ability to call it from within the HTML. 

- [ ] We now create a method on the `$scope` called `createTodo`. This function will be invoked when the user clicks the submit button that will live on the `form` element.

        $scope.createTodo = function() {
          $http.post('/api/todos', $scope.formData)
            .success(function(data){
              $scope.formData = {};
              $scope.todos = data;
            })
            .error(function(error){
              console.log("Error:", error);
            });
        };

  `$http.post(...)` is a shortcut method that is provided on the `$http` service. After we send the `POST` request along with the `formData`, we reset the `formData` to be blank and set the `$scope.todos` to the response data. Remember in the server how we are using Mongoose's `create` method to add another item to the database? (The following code is already in your 'server.js' file)

        app.post('/api/todos', function(request, response){
          // Use Mongoose's .create() method to create a new item. 
          ToDo.create({
            // The text comes from the AJAX request sent from Angular.
            text: request.body.text,
            complete: false
          }, function(err, todo){...}

The text is coming from the `text` property that is being pulled off of the request body. In our scenario, we're sending the `$scope.formData` object as our request body.

- [ ] We'll create a submit button on the form element. Underneath the `<input>` element, let's add a `<button>` element:

         <button type="submit" ng-click="createTodo()">Add New</button>

  The Angular directive `ng-click` will invoke the provided function whenever this element is clicked. We will use this to access the recently created `$scope.createTodo` function.

Navigate to your browser and you should now see a button underneath the form. Add an item to the database, and refresh the page. The initial `GET` request to the server should now return a response that contains the newly created todo item:

![](http://i66.tinypic.com/w2ise1.jpg)

### Displaying items

Now that we've written code that will add items to the database, we should be able to render something useful onto the page.

- [ ] Add a todo list section to the HTML **above** the `todo-form` element

        <div id="todo-list" class="row">
          <div class="col-sm-4 col-sm-offset-4">
          </div>    
        </div>

We'll use the [Angular directive `ng-repeat`](https://docs.angularjs.org/api/ng/directive/ngRepeat) to dynamically generate HTML based on the data behind the scenes. We can iterate over the `todos` object and create an element on the page for each todo item.

- [ ] Add a [checkbox element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) for every item in todos, using `ng-repeat`. This works just like a standard `for` loop where we define a keyword (`todo`) to represent each individual value in the collection (`todos`). The following code should be added within the above code. 
    
        <div class="checkbox" ng-repeat="todo in todos">
          <input type="checkbox"> {{ todo.text }}
        </div>

Currently, when the user clicks on the checkbox, it will just display a checkmark but won't take any effect on the item itself. We can add a function to our controller to delete the item. 

         <input type="checkbox" ng-click="deleteTodo(todo._id)"> {{ todo.text }}

Now, when we click on the checkbox, it will try to invoke `deleteTodo` and pass it the current todo's `._id` property as an argument. As a reminder, the `_id` property is generated automatically by Mongoose.

- [ ] Add a `deleteTodo` function to the `mainController`:

        $scope.deleteTodo = function(todo_id){
          $http.delete('/api/todos/' + todo_id)
            .success(function(data){
              $scope.todos = data;
              console.log("item", todo_id, "successfully deleted");
            })
            .error(function(error){
              console.log("Error deleting todo_id", todo_id, ": ", error);
            });
        };

Now, clicking on the checkbox should remove the item from the database.
