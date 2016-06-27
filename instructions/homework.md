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

After the label element, let's add a `<span>` element that contains two elements, an `<input>` and an anchor tag (`<a>`). Your code should look like this:

      <div class="checkbox" ng-repeat="todo in todos">
        <input type="checkbox" ng-click="deleteTodo(todo._id)">
        <label> {{ todo.text }} </label>
        <span>
          <input/>
          <a><a/>
        </span> 
      </div>` 

We're going to set this up so that when we click on the todo item's text (the label element), that element will become hidden. Use [ngClick](https://docs.angularjs.org/api/ng/directive/ngClick) and [ngHide](https://docs.angularjs.org/api/ng/directive/ngHide) to make this happen. 

      <label ng-click="editing = true" ng-hide='editing'>{{todo.text}}</label>

Now, if you refresh your page, you should be able to click on the text of a todo item and it will now hide that item. The `ng-hide` attribute will hide the element if the expression provided to it is true, so when we click on the item, it sets the value of the `editing` variable equal to true, effectively hiding the element.

We'll also use this `editing` variable to show some other elements to replace the recently hidden element. Let's add an [ngShow](https://docs.angularjs.org/api/ng/directive/ngShow) attribute to the `<span>` element so that it becomes visible when `editing` is true.

      <span ng-show="editing">
        <input/>
        <a><a/>
      </span>

Let's give the `input` element a type and set the `ng-model` equal to "todo.text"


