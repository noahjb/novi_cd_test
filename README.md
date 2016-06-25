# Building a MEAN Stack Application

This is a course designed to introduce you to the MEAN stack and web development with Javascript. 

MEAN stands for MongoDB, Express, AngularJS, and NodeJS. 

## Table Of Contents
* [Setup](#setting-up)
* [Section 0 Instructions](instructions/branch0.md): Setting up the database
* [Section 1 Instructions](instructions/branch1.md): Setting up routes
* [Section 2 Instructions](instructions/branch2.md): Building the Angular Front-End
* [Format](#course-format): Explanation of branches and processes

## Setting Up Your Cloud Environment
This workshop assumes you have 1) NO development experience, 2) have NEVER written any code previously, and 3) are willing to learn through PRACTICE. This setting-up part of the workshop should take you no more than 30 minutes. Don't be shy if you get stuck. And if you finish early, look to assist others. 

Let's get started!

First off, you'll need a GitHub account ([What is GitHub?](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=what+is+github)) If you don’t have one, go to https://github.com and sign up for your account. 

Once you're logged in, you'll need to fork the following repository to your account: 

![](http://i68.tinypic.com/264rgao.jpg) 

Keep this window on GitHub open as we'll be using this tool shortly.

Now let's create our CodeAnywhere cloud environment ([What is CodeAnywhere?](https://codeanywhere.com/)) Start by signing up for a [CodeAnywhere](www.codeanywhere.com) account, and use your GitHub account and do it in one click. 

Once you're logged in, you'll see a pretty empty interface. To start building our app, we'll need to create a new container. Go to **File > New Connection > Container** , and then scroll down to select **MEAN Ubuntu 14.04 version**. You'll need to name the container to create it. 

![](http://i68.tinypic.com/27y3nmv.png) 

GitHub account- check. 
CodeAnywhere MEAN container- check. 
But wait- [what is MEAN again?](http://learn.mean.io/) You should know that ADSK engineers are primary contributors to the https://mean.io project. Check out their Slack channel: https://autodesk.slack.com/messages/gamedev-website/details/.

Let's get back to it. Back in CodeAnywhere, you may see that you have an **SSH Terminal** open. If not, open up one by right-clicking on your new container: 

![](http://i68.tinypic.com/33axpog.jpg)

What we need to do now is to clone the repository we forked earlier in GitHub to our CodeAnywhere environment. Go back to your open GitHub window and copy the repository link from Github using “**Clone with HTTPS**”. If that doesn't make sense, take a look at the screenshot below or ask someone for help: 

![](http://i64.tinypic.com/szhhd4.jpg) 

Once you've copied the link, go back to CodeAnywhere and in the SSH terminal, type in the following command (The SSH terminal doesn't allow keyboard pasting, so you'll need to use the browser's right-click Paste function): 
 
   `git clone [PASTE YOUR LINK HERE]`

You should now see a **mean_adsk** folder in the folder panel on the left-hand side of the CodeAnywhere environment. If you don't see it, right-click the container and **Refresh**. 

![](http://i63.tinypic.com/52yzyq.jpg)

Staying in the SSH terminal, we want to navigate to the mean_adsk folder with the following command: 

  `cd mean_adsk`

We'll then run the following commands (Disregard the nasty error message):
 
   `git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done`
   
   `git fetch --all`

Then, run the following command to verify you have all of the available branches (What is a branch? You can take a quick look [here](https://guides.github.com/activities/hello-world/) - scroll down to Step 2. If you want to learn further, you can refer to [this doc](https://git-scm.com/book/en/v1/Git-Branching-What-a-Branch-Is) later):
 
   `git branch`

Almost done. 
What you need to do now is checkout the starter branch:
 
   `git checkout starter`

Then, we need to install dependencies by running the following command (What are dependencies? Good question. A simple explanation is that sometimes when you install programs, they rely on other programs to work, and these other programs are called dependencies. Further understanding is not necessary for the task at hand. Let's table it.): 

   `npm install`

Now you need to open your connection's config file by right-clicking on your container and choosing "Config":

![](http://i66.tinypic.com/315bkep.jpg) 

In your config file, set the current working directory to point to your `mean_adsk` directory:  

   `"cwd": "~/workspace/mean_adsk"` 

![](http://i66.tinypic.com/2ljkivq.jpg)

Remember to save the config file using Command+S or Ctrl+S. 

Done. 
You've finished creating your cloud development environment. Notice that you installed absolutely nothing locally, and you've accomplished all of those tasks with just a browser. 

Welcome to the **new** normal.

## A Few Words about the Workshop Format

We will be using a pre-configured MEAN container on a virtual integrated development environment. It comes preloaded with some of our dependencies, and will have many folders already in place. You can safely ignore all of the folders and files in the container _except_ for the folder that contains our respository (`/mean_adsk`).

The workshop is split into 3 sections. Failure is totally acceptable here and we find it an important part of learning. But we don't want that to stop you from progressing. To accomplish that, the completed code for each section can be found in their corresponding branch. For instance, Branch1 will contain all of the completed code from both Section 0 and Section 1.  

- Starter: This branch is going to be your main branch for development
- Branch0: Contains completed database connection and model setup
- Branch1: Contains completed API routes and Angular routes setup
- Branch2: Contains completed Angular code and HTML view code
(Don't worry if this all sounds like martian-speak. All in due time)

You can checkout any of the solution branches using the following command: 

   `git checkout [BRANCH NAME]`

## Next Section

* [Section 0 Instructions](instructions/branch0.md): Setting up the database
