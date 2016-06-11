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

If you run the command `npm install`, npm will check this file and install Express and Mongoose.

 