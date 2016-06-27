# Allow Updates to Todo Items

Create, Read, Update, and Delete [(CRUD)](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) are the four basic functions of persistent storage. Our application supports Creation, Read, and Deletion. This section will guide you through modifying the application in a way to support Updates to documents in the database.

On the HTML page, we'll update the view so that when a user clicks on a task, we hide the task text and replace it with a text input form. So, the HTML will contain the code for the task text AND the code for the input form, but the code for the input form will be hidden. We can use some logic to switch what elements are hidden. To the user, it will look like a seamless transition from plain text on the page to a form where they can edit that text.

After updating the HTML, we'll need to update the controller to handle those features. We'll add an `editTodo` function that will make an HTTP `PUT` request to the server. The function will grab the new text from the item on the page and send it to the server.

Finally, we need to create a new request handler on the server that will accept these `PUT` requests. In the request handler, we'll use a Mongoose function to update the database.

### Updating the View




