#Building an Angular Front-End (User interface)
You have until 3PM to complete this part of the workshop.

But before we get into it, why don't we test our app? Since we used a cloud development environment like Codeanywhere, one of the benefits is your code is already "in the cloud" and the amount of work to deploy it "to the cloud" is minimal. In fact, since we started off with a preconfigured MEAN container, we're actually one click away from "running" our code. 

Take a moment and figure out how to do that. Found it? What happened? 

###Define a controller
In this section, we'll simultaneously create the HTML and Angular code. These work together to render the application.

Angular controllers control the data flow within Angular applications. Angular has many services that can be [injected](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=what+is+dependency+injection) into controllers to be used within the controller code. Our controller will use the `$scope` service to store properties and functions that will be available to the HTML. We'll use the `$http` service to make AJAX requests to our server.

Let's get to it!

Create a controller and render it. The files we'll be using are all under the **public** folder.

![](http://i67.tinypic.com/2507879.jpg)

In `main.js`, we've started a function called `mainController`. Go ahead and add the two arguments `$scope` and `$http`:

```javascript
function mainController($scope, $http){

}
```

###Use controller in HTML
Open `index.html` and define the use of the `mainController`. Find the `<body>` element and add code so it looks like this:

```html
<body ng-controller="mainController">
  <div class="container">

  </div>
</body>
```
What do you think this is doing `ng-controller="mainController"`?

###Store form data
Back in `main.js`, in the controller, go ahead and define an object to store form data. It will live on the `$scope` object:

```javascript
function mainController($scope, $http){
  $scope.formData = {};

}
```

###Define a form
Now back in `index.html` create a form within the `<div class="container">` element so your code looks like this:

```html
<body ng-controller="mainController">
  <div class="container">
    <div id="todo-form" class="row">
      <div class="col-sm-8 col-sm-offset-2 text-center">
        <form> 
          <div class="form-group">
            <input type="text" class="form-control input-lg text-center" placeholder="learn web dev with angular" ng-model='formData.text'>
          </div>
        </form>
      </div>
    </div>
  </div>
</body>
```

Let's take a sec to walk through this bit.

In the `<input>` element we have a [directive](https://docs.angularjs.org/api/ng/directive/ngModel) `ng-model='formData.text'`. This binds the value in the input form to the property `text` on the provided model `formData`,  which lives on the `$scope`, which we defined earlier in `mainController`. The `$scope` is available from within the HTML block that references the controller: `<body ng-controller="mainController">`. 

What do you think will happen if we test our app now?

Soon we'll add a button to the form that will allow us to save the form's data to the database.

## Setting up Controller Methods

### GET the page

When we load the `mainController`, the first thing we'll do is send an HTTP request to the server in order to get all of the todo items from the database. 

In the server, we built a request handler `app.get('/api/todos'...` that returns all of the todos from the database. 

Let's write the client-side code that will interact with that endpoint.

`$http` is a core Angular service that comes with helper functions that facilitate communication with HTTP servers. `$http` takes a single argument - a configuration object - that is used to generate an HTTP request and it returns a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Because the HTTP request is [asynchronous](http://docs.apigee.com/api-baas/asynchronous-vs-synchronous-calls), we use a promise to associate handlers with the eventual success or failure of this HTTP request.

We need to send an HTTP request to the server to gather all of the todos in the database. In `mainController`, let's make an HTTP GET request:

```javascript
$http({
      method: 'GET',
      url: '/api/todos'
    }).then(function successCallback(response){
    	// Called asyncronously when the response is available, if no error
    
	}, function errorCallback(response){
    	// Called asyncronously if an error occurs or the server returns
    	// a response with an error status
    
  	});
```

After the HTTP request is made, we use the `.then(...)` method to handle the next steps. It takes a success function `successCallback` and an error function `errorCallback`. One of these will be invoked based on the [status of the HTTP request](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).

On a successful `GET` request to the `/api/todos` route, we'll expect the response to contain an object that has all of the todos that exist in the database. We need to store this response object on the `$scope`. We also need to add some basic error handling in case the `GET` request fails. 

For the `successCallback` store the `response.data` onto the `$scope`:

```javascript
$http({
  	method: 'GET',
   	url: '/api/todos'
	}).then(function successCallback(response){
    	// Called asyncronously when the response is available, if no error
    	$scope.todos = response.data;
    	console.log("received data from the server:", response);
  	}, function errorCallback(response){
    	// Called asyncronously if an error occurs or the server returns
    	// a response with an error status
    
  	});
```

For the errorCallback, log the error to the console:

```javascript
$http({
  	method: 'GET',
   	url: '/api/todos'
	}).then(function successCallback(response){
    	// Called asyncronously when the response is available, if no error
    	$scope.todos = response.data;
    	console.log("received data from the server:", response);
  	}, function errorCallback(response){
    	// Called asyncronously if an error occurs or the server returns
    	// a response with an error status
		console.log("received an error from the server:", error); 
  	});
```

Go ahead and test the code. You should see a page that contains a single form element, with your placeholder text. (Note: there might be pop-up blocking in your brower. If so, you will need to unblock it.) 

![](http://i67.tinypic.com/idy5pe.jpg)

###Debug with Chrome Developer tools
Open up [Chrome Developer Tools](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=chrome%20developer%20tools) and take a look at the Console tab. 

We can see that upon the initial page load, we sent a `GET` request to our own server and then responded with an empty object.

![](http://i64.tinypic.com/21djrit.jpg)

The data property is an array that would normally contain the todo items that exist in the database. As you can see, we currently do not have any todo items in the database.

### Add items to the database
Let's write a function that adds an item to the database. This will live as a method on the `$scope` object. Adding the method to the `$scope` object will allow us the ability to call it from within the HTML. 

We now create a method on the `$scope` called `createTodo`. `createTodo` will be invoked when the user clicks the submit button on the `form` element:

```javascript
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
```
    
`$http.post(...)` is a shortcut method that is provided on the `$http` service. After we send the `POST` request along with the form's data `$scope.formData`, we reset the `formData` to be blank `$scope.formData = {};` and set the `$scope.todos` to the response data. 

So what's really going?

Remember in `server.js` we used Mongoose's `create` method to add items to the database:

```javascript
app.post('/api/todos', function(request, response){
  	// Use Mongoose's .create() method to create a new item. 
  	ToDo.create({
      	// The text comes from the AJAX request sent from Angular.
       	text: request.body.text,
        complete: false
   		}, function(err, todo){...
```

The text is coming from the `text` property that is being pulled off of the request body. In our scenario, we're sending the `$scope.formData` object as our request body.

###Invoke `createTodo()`
We'll create a submit button on the form element. Underneath the `<input>` element, let's add a `<button>` element:

```html
<button type="submit" ng-click="createTodo()">Add New</button>
```

Your HTML code in the `<body>` block should look like this:

```html
<body ng-controller="mainController">
  <div class="container">
    <div id="todo-form" class="row">
      <div class="col-sm-8 col-sm-offset-2 text-center">
        <form> 
          <div class="form-group">
            <input type="text" class="form-control input-lg text-center" placeholder="learn web dev with angular" ng-model='formData.text'>
            <button type="submit" ng-click="createTodo()">Add New</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</body>
```
  
The Angular directive `ng-click` will invoke the provided function whenever this element is clicked. We will use this to access the recently created `$scope.createTodo` function.

Go ahead and test your code. You should now see a button underneath the form. Add an item to the database, and refresh the page. The initial `GET` request to the server should now return a response that contains the newly created todo item:

![](http://i66.tinypic.com/w2ise1.jpg)

### Display items

Now that we've written code that will add items to the database, we should be able to render something useful onto the page.

Add a todo list section to the HTML **above** the `todo-form` element:

```html
<div id="todo-list" class="row">
  	<div class="col-sm-4 col-sm-offset-4">
   	
   	</div>    
</div>
```

We'll use the Angular directive [`ng-repeat`](https://docs.angularjs.org/api/ng/directive/ngRepeat) to dynamically generate HTML based on the data behind the scenes. We can iterate over the `todos` object and create an element on the page for each todo item.

```html
<div id="todo-list" class="row">
  	<div class="col-sm-4 col-sm-offset-4">
		<div class="checkbox" ng-repeat="todo in todos">

		</div>   	
   	</div>    
</div>
```

###Delete items
Add a [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) element for every item in todos, using `ng-repeat`. This works just like a standard for-loop where we define a keyword (`todo`) to represent each individual value in the collection (`todos`). The following code should be added within the `todo-list`:

```html
<div id="todo-list" class="row">
  	<div class="col-sm-4 col-sm-offset-4">
		<div class="checkbox" ng-repeat="todo in todos">
			<input type="checkbox"> {{ todo.text }}
		</div>   	
   	</div>    
</div>
```

What we want is that when the user clicks on the checkbox, it will delete the item from the database:

```html
<div id="todo-list" class="row">
  	<div class="col-sm-4 col-sm-offset-4">
		<div class="checkbox" ng-repeat="todo in todos">
			<input type="checkbox" ng-click="deleteTodo(todo._id)"> {{ todo.text }}
		</div>   	
   	</div>    
</div>
```

When we click on the checkbox, it will try to invoke `deleteTodo` and pass the current todo's `todo._id` property as an argument. As a reminder, the `_id` property is generated automatically by Mongoose.

Test again. What's going on?

We need to define the `deleteTodo` function in `mainController`:

```javascript
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
```

Now, when you click on the checkbox, the item should be deleted from the database, and the list of todos should be refreshed automatically.

Congratulations! You've built your very first MEAN web application!

## Next Section

[Extra credit](./extra_credit.md)
