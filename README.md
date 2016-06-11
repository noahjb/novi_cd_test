# Building a MEAN Stack Application

This is a course designed to introduce you to the MEAN stack and web development with Javascript. 

MEAN stands for MongoDB, Express, AngularJS, and NodeJS. 

DEFINE ALL

## Setting Up
1. Log into your public GitHub account. If you don’t already have one, go to https://github.com to sign up for a new account. 
2. Fork this repository to your account
3. Sign up for [CodeAnywhere](www.codeanywhere.com) using your Github account
4. Create a new container by choosing **File > New Connection.** Make sure to select the pre-configured MEAN Ubuntu 14.04 verstion+ ![](http://i68.tinypic.com/27y3nmv.png)
5. Copy the repository link from Github (NOTE: make sure you use “Clone with HTTPS”). ![](http://i63.tinypic.com/w8ommr.png)
6. If it’s not already open in Codeanywhere, open up an SSH Terminal by right clicking on your new container on the left-hand side: ![](http://i66.tinypic.com/1eq5ub.png)
7. Type in the following command into your SSH Terminal: `git clone [PASTE YOUR LINK HERE]`
8.  Verify that you now have a node-todo folder in the folder structure, which is located on the left-hand side of the container. You may need to right-click the left-hand side of the container and click refresh: ![](http://i68.tinypic.com/e9udtk.jpg)
9.  Within the terminal, navigate to the node-todo folder by entering the following command: `cd mean_adsk`
10.  Run the following command: (Note: you may get an error, don't worry)
  `git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done`
  `git fetch --all`
11.  Verify that you have all of the available branches (steps 0 through 4) on your virtual machine. Use the command `git branch`