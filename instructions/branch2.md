# Creating Angular Front-End

In this section, we'll simultaneously create the HTML and Angular code. These work together to render the application.

## Defining a Controller

Angular Controllers control the data flow within Angular applications. 

- [ ] Create a controller and render it
  - [ ] In `main.js`, create a function called `mainController`. It will take two arguments, `$scope` and `$http`:
    
          function mainController($scope, $http) {}

  - [ ] In `index.html`, define the use of the `mainController`

          <body ng-controller="mainController">
          </body>

  - [ ] On the controller, define an object to store the form data. It will live on the $scope object. Additionally, we can create an array to hold the todo items after we've received them from the database.

          $scope.formData = {};
          $scope.todos = [];

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

    
