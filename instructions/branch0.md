# Base Setup

## Folder Structure

We're going to keep the folder structure of this application relatively simple. Our Node/Express server code will live in the `server.js` file. 

Here is the folder structure as is:
    - public         <!-- holds our front-end Angular files -->
    ----- core.js    <!-- Angular code -->
    ----- index.html <!-- main HTML view -->
    - package.json   <!-- npm configuration file -->
    - server.js      <!-- Backend Node file -->
    - instructions   <!-- Step by Step guide to building this application-->

## Package.json and Installing Dependencies

package.json is used to configure the NPM package manager. We can list dependencies and set up commands in this file. 

- [ ] Run the command `npm install`, npm will check this file and install Express and Mongoose. Your terminal should show a file structure that looks something like this: ![](http://i65.tinypic.com/mif60k.jpg)

## Node/Express Configuration

In our `package.json` file, we indicated that our main file is the `server.js` file. Here is where we will configure the entirety of our back-end. 
* Connect to Mongo Database
* Create our Mongoose Models
* Define routes for our API
* Define routes for our Angular app

At the top of the file, we're importing the modules that we'll be using to build this application. Then, we have some basic setup to define the port, and define use of middleware.

### Setting up the Database
- [ ] Connect to Mongoose
- `mongoose.connect('mongodb://localhost/app'); `
- [ ] Set up Mongoose Model for ToDo
- Initialize a variable called ToDo and set it equal to the following:
  -  `mongoose.model('Todo', { text: { type: String, default: '' } });`



