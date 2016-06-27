# Allow Updates to Todo Items

Create, Read, Update, and Delete [(CRUD)](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) are the four basic functions of persistent storage. Our application supports Creation, Read, and Deletion. This section will guide you through modifying the application in a way to support Updates to documents in the database.

On the HTML page, we'll update the view so that when a user clicks on a task, we hide the task text and replace it with a text input form. So, the HTML will contain the code for the task text AND the code for the input form, but the code for the input form will be hidden. We can use some logic to switch what elements are hidden. To the user, it will look like a seamless transition from plain text on the page to a form where they can edit that text.

After updating the HTML, we'll need to update the controller to handle those features. We'll add an `editTodo` function that will make an HTTP `PUT` request to the server. The function will grab the new text from the item on the page and send it to the server.

Finally, we need to create a new request handler on the server that will accept these `PUT` requests. In the request handler, we'll use a Mongoose function to update the database.

After these updates, your app will look like this: 
![](http://i67.tinypic.com/1zps9xg.jpg)

### Updating the View

In the `ng-repeat` block, we're going to update the layout to include some elements that will be hidden by default.

The code should look like this:

      <div class="checkbox" ng-repeat="todo in todos">
        <input type="checkbox" ng-click="deleteTodo(todo._id)"> {{ todo.text }}
      </div>` 

Let's remove the `{{ todo.text }}` and create a new `<label>` element after the `<input>` tag. This label should contain the `{{ todo.text }}`.

      <label> {{ todo.text }} </label>

After the label element, let's add a `<span>` element that contains two elements, a [text input](http://www.w3schools.com/tags/tag_input.asp) and an [anchor tag](http://www.w3schools.com/tags/tag_input.asp). Your code should look like this:

      <div class="checkbox" ng-repeat="todo in todos">
        <input type="checkbox" ng-click="deleteTodo(todo._id)">
        <label> {{ todo.text }} </label>
        <span>
          <input type="text/>
          <a><a/>
        </span> 
      </div>

We're going to set this up so that when we click on the todo item's text (the label element), that element will become hidden. Use [ngClick](https://docs.angularjs.org/api/ng/directive/ngClick) and [ngHide](https://docs.angularjs.org/api/ng/directive/ngHide) to make this happen. 

      <label ng-click="editing = true" ng-hide='editing'>{{todo.text}}</label>

Now, if you refresh your page, you should be able to click on the text of a todo item and it will now hide that item. The `ng-hide` attribute will hide the element if the expression provided to it is true, so when we click on the item, it sets the value of the `editing` variable equal to true, effectively hiding the element.

We'll also use this `editing` variable to show some other elements to replace the recently hidden element. Let's add an [ngShow](https://docs.angularjs.org/api/ng/directive/ngShow) attribute to the `<span>` element so that it becomes visible when `editing` is true.

        <span ng-show="editing">
          <input type="text"/>
          <a><a/>
        </span>

Make sure the input element is correctly linked using the [ngModel attribute](https://docs.angularjs.org/api/ng/directive/ngModel). 

        <input type="text" ng-model="todo.text"/>

Let's give the anchor element a bootstrap class to give it an image. Head to the [glyphicons](http://getbootstrap.com/components/) page and pick one. Set the class attribute equal to that icon.

        <a class="glyphicon glyphicon-ok"></a>

Now when you click on the text label, it should appear that the text label has changed into an input box with an icon next to it. Now we have to add some logic so that when we click on the icon, it sends the new data to the server AND updates the HTML. So, let's add that to the anchor tag.

        <a data-ng-click="editing = false; editTodo(todo._id, todo.text)" class="glyphicon glyphicon-ok"></a>

When the user clicks on this icon, it will set the `editing` variable to false, hiding the `<span` element and displaying the `<label` element. It will also invoke a function in the `mainController` (that we haven't built yet) that will send the data to the server and update the database.

### Updating the Controller

Add a new function to the controller that lives on the $scope object. It will be called `editTodo` and will use the [`$http.put(...)`](https://docs.angularjs.org/api/ng/service/$http#put) method to send a `PUT` request to the server.

The `$http.put(...)` method will take two arguments. The first is the URL that contains the specific `todo_id`. Reference the `$scope.deleteTodo` function to see how this works. The second argument is the data object.


### Updating the Server

Add a new request handler that accepts `PUT` requests to the `/api/todos/:todo_id` endpoint. This request handler will use the Mongoose [`findByIdAndUpdate(...)`](http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate) function to make changes to a single todo item at a time.





