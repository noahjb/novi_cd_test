# Project Structure, Server Setup and Database Setup

## Folder Structure

We're going to keep the folder structure of this application relatively simple. Our Node/Express server code will live in the `server.js` file. 

Here is the folder structure as is:

    - public         <!-- holds our front-end Angular files -->
    ----- main.js    <!-- Angular code -->
    ----- index.html <!-- main HTML view -->
    - package.json   <!-- npm configuration file -->
    - server.js      <!-- Backend Node file -->
    - instructions   <!-- Step by Step guide to building this application-->

## Package.json and Installing Dependencies

package.json is used to configure the NPM package manager ([What is NPM?](https://docs.npmjs.com/getting-started/what-is-npm)). We can list dependencies and set up commands in this file. 

- [ ] If you haven't already, run the command `npm install`, npm will check the `package.json` file and install Express and Mongoose. Your should now see a file structure in your terminal that looks like this: ![](http://i68.tinypic.com/10hr8mq.jpg)

## Node/Express Configuration

In our `package.json` file, we indicated that our main file is the `server.js` file. Here is where we will configure the entirety of our back-end. 
* Connect to Mongo Database
* Create our Mongoose Models
* Define routes for our API
* Define routes for our Angular app

At the top of the file, we're importing the modules that we'll be using to build this application. Then, we have some basic setup to define the port and define use of middleware.

### Setting up the Database
In this section, we will connect to the database and set up a model. A model is a constructor function that will return an instance of a specially formatted object that is stored in the database. Mongoose is an abstraction layer between the server and the database that makes it easy to model objects using plain Javascript.

- [ ] In the `server.js` file (make sure you click on the one under the **mean_adsk** folder), connect to Mongoose (Not sure how to do this? Just copy the following code and paste it under the comment line "connect to mongo/mongoose".):

     `mongoose.connect('mongodb://localhost/app'); `

- [ ] Set up a Mongoose Schema and Model to define the structure of the ToDo object in the database:
  - [ ] Define a Mongoose Schema:
  
     `var toDoSchema = new mongoose.Schema({text: {type: String, default: ''}, complete: {type: Boolean, default: false} });`
  
    - In the above code, we initialize a variable called toDoSchema and set it equal to a `new mongoose.Schema({...})`
    - Inside of the function call, we pass it an object that defines the properties on that model: `{ text: {type: String, default: ''}, complete: {type: Boolean, default: false} }`
  - [ ] Create a Mongoose Model:
 
     `var ToDo = mongoose.model('ToDo', toDoSchema);`
  
    - In the above code, we initialize a variable called ToDo and set it equal to `mongoose.model('ToDo', toDoSchema)`;
    - The first argument to mongoose.model() is the name of the model, and the second argument is the schema that defines the properties on that model. 
    - Mongoose automatically creates an `_id` for every instance of the ToDo object in the database.

For more information: [Mongoose Connect](http://mongoosejs.com/docs/connections.html) | [Mongoose Models](http://mongoosejs.com/docs/models.html)

Don't forget to save this file before moving on to the next section.

## Next Section

In the next section, we'll be setting up the back-end routes. [Section 1 Instructions](./branch1.md)
