# Building a MEAN Stack Application

This is a course designed to introduce you to the MEAN stack and web development with Javascript. 

MEAN stands for MongoDB, Express, AngularJS, and NodeJS. 

## Table Of Contents
* [Setup](#setting-up)
* [Section 0 Instructions](instructions/branch0.md): Setting up the database
* [Section 1 Instructions](instructions/branch1.md): Setting up routes
* [Section 2 Instructions](instructions/branch2.md): Building the Angular Front-End
* [Format](#course-format): Explanation of branches and processes

## Setting Up
1. Log into your public GitHub account. If you don’t already have one, go to https://github.com to sign up for a new account. 
2. Fork this repository to your account
3. Sign up for [CodeAnywhere](www.codeanywhere.com) using your Github account
4. We'll be using a pre-configured environment that has most of our dependencies pre-installed. Create a new container by choosing **File > New Connection.** Make sure to select the pre-configured MEAN Ubuntu 14.04 version. Set the name of the connection to your first name. ![](http://i68.tinypic.com/27y3nmv.png)
5. Copy the repository link from Github (NOTE: make sure you use “Clone with HTTPS”). ![](http://i63.tinypic.com/w8ommr.png)
6. If it’s not already open in Codeanywhere, open up an SSH Terminal by right clicking on your new container on the left-hand side: ![](http://i68.tinypic.com/33axpog.jpg)
7. Type in the following command into your SSH Terminal: `git clone [PASTE YOUR LINK HERE]`
8.  Verify that you now have a mean_adsk folder in the folder structure, which is located on the left-hand side of the container. You may need to right-click the left-hand side of the container and click refresh: ![](http://i63.tinypic.com/52yzyq.jpg)
9.  Within the terminal, navigate to the mean_adsk folder by entering the following command: `cd mean_adsk`
10.  Run the following commands: (Note: you may get an error, don't worry)

  `git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done`

  `git fetch --all`

11.  Verify that you have all of the available branches on your virtual machine. Use the command `git branch`
12.  Checkout the starter branch: `git checkout starter`
13.  Install dependencies by running `npm install`
14.  In your connection's config file, set the current working directory to point to your newly created `mean_adsk` directory.  
  `"cwd": "~/workspace/mean_adsk"` 
  To open the config file, right click on your connection name and choose "Config":
![](http://i66.tinypic.com/315bkep.jpg) ![](http://i64.tinypic.com/30sae7k.jpg)
Make sure to save the config file with (command+s) or (cntl+s).

## Course Format

We will be using a pre-configured container on a virtual IDE for development. It will come preloaded with some of our dependencies, and will have many folders already in place. We will be ignoring all of the folders and files on the container _except_ for the folder that contains our respository (`/mean_adsk`).

The Course is split up into 3 sections for you to complete. The completed code for each section's prompts can be found in their corresponding branch. For instance, Branch1 will contain all of the completed code from both Section 0 and Section 1.  

- Starter: This branch is going to be your main branch for development
- Branch0: Contains completed database connection and model setup
- Branch1: Contains completed API routes and Angular routes setup
- Branch2: Contains completed Angular code and HTML view code

You can checkout any branch using the following command: `git checkout [BRANCH NAME]`