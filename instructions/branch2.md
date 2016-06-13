# Creating Angular Front-End

In this section, we'll simultaneously create the HTML and Angular code. These work together to render the application.

## Defining a Controller

Angular Controllers control the data flow within Angular applications. 

- [ ] Create a controller and render it

  - [ ] In `main.js`, create a function called `mainController`. It will take two arguments, `$scope` and `$http`:
    
          function mainController($scope, $http) {}

  - [ ] In `index.html`, define the use of the `mainController`

          <body ng-controller="mainController">
            <div class="container">
            </div>
          </body>

  - [ ] On the controller, define an object to store the form data. It will live on the $scope object. Additionally, we can create an array to hold the todo items after we've received them from the database.

          $scope.formData = {};
          $scope.todos = [];

  - [ ] In the HTML, let's create a form element that we'll use to enter new values into the todo list. Within the `container` `div`, let's add a simple form element.
          
          <div id="todo-form" class="row">
              <div class="col-sm-8 col-sm-offset-2 text-center">
                  <form> 
                      <div class="form-group">
                          <input type="text" class="form-control input-lg text-center" placeholder="learn web dev with angular" ng-model='formData.text'>
                      </div>
                  </form>
              </div>
          </div>

  Notice how in the `<input>` element, we have a tag that says `ng-model='formData.text'`. [ngModel is an Angular directive](https://docs.angularjs.org/api/ng/directive/ngModel) that will bind the value in the input form to a property on the provided model. In this case, we're storing it on the `text` property of the `formData` object that lives on the `$scope` that we defined in the `mainController`. Later, we'll add a button to the form that will save the form data to the database.

## Setting up Controller Methods

When we load the `mainController`, the first thing we'll do is send an HTTP request to the server in order to get all of the todo items from the database. Do you remember the server code we wrote? 

We built a request handler `app.get('/api/todos'...` that returns all of the todos from the database. Let's write the client-side code that will interact with that endpoint.

`$http` is a core Angular service that comes with helper functions that facilitate communication with HTTP servers. `$http` takes a single argument - a configuration object - that is used to generate an HTTP request and it returns a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). A promise is an object that represents an operation that hasn't completed yet, but is expected in the future. Because the HTTP request is Asyncronous, we use a Promise to associate handlers with the eventual success or failure of this HTTP request.

- [ ] Send an HTTP request to the server to gather all of the todos in the database:

        $http({
          method: 'GET',
          url: '/api/todos'
        }).then(function successCallback(response){
          // Invoked asyncronously when the response is available
        }, function errorCallback(response){
          // Called asyncronously if an error occurs or the server returns
          // a response with an error status
        });

Note how the HTTP request has a success function and an error function. ONE of these will be invoked based on the status of the HTTP request.

On a successful `GET` request to the `/api/todos` route, we'll expect the response to contain an object that has all of the todos that exist in the database. We need to store this response object on the `$scope`. We also need to add some basic error handling in case the `GET` request is a failure.

- [ ] Within the successCallback, store the response onto the `$scope`. Within the errorCallback, log the error to the console.
    
        function successCallback(response){
          $scope.todos = response;
          console.log("received data from the server:", response);
        }, function errorCallback(response){
          console.log("received an error from the server:", error);
        });

Let's now write a function that adds an item to the database. This will live as a method on the `$scope` object.

- [ ] Create a method on the `$scope` called `createTodo`. This function will be invoked when the user clicks the "submit" button that lives on the `form` element.

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

  `$http.post(...)` is a shortcut method that is provided on the `$http` service. After we send the `POST` request along with the `formData`, we reset the `formData` to be blank and set the `$scope.todos` to the response data. Remember in the server how we are using Mongoose's `create` method to add another item to the database?

        app.post('/api/todos', function(request, response){
          // Use Mongoose's .create() method to create a new item. 
          ToDo.create({
            // The text comes from the AJAX request sent from Angular.
            text: request.body.text,
            complete: false
          }, function(err, todo){...}

The text is coming from the `text` property that is being pulled off of the request body. In our scenario, we're sending the `$scope.formData` object as our request body.




