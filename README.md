# Building a MEAN Stack Web Application

Hello!

This workshop is designed to introduce you to the [MEAN stack](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=what+is+mean+stack). It assumes you're starting at close to absolute zero: no development experience, never written any JavaScript code previously, and coming in with just a willingness to learn through practice. 

## Table Of Contents
* [Setup](#setting-up-your-cloud-environment)
* [Section 0 Instructions](instructions/branch0.md): Setting up the database
* [Section 1 Instructions](instructions/branch1.md): Setting up routes
* [Section 2 Instructions](instructions/branch2.md): Building the Angular Front-End
* [Format](#course-format): Explanation of branches and processes

## Setting Up Your Cloud Environment
This should take no more than 30 minutes. If you're stuck on any one step for more than a couple mintues, ask for help. If you finish early, look to help. 

Let's get started!

[Fork](https://help.github.com/articles/fork-a-repo/) the **mean_adsk** repo you've been invited to: 

![](http://i68.tinypic.com/264rgao.jpg) 

Keep this window on GitHub open as we'll come back to it shortly.

Now we'll create our [CodeAnywhere cloud environment](https://codeanywhere.com/)). Sign up for a [CodeAnywhere](www.codeanywhere.com) account, and if use your GitHub account, you can do it in one click. 

Once you're logged into CodeAnywhere, you'll see that the environment is pretty empty. To start building out our app, we'll need to create a new container. 

Go to **File > New Connection > Container** , and then scroll down to select **MEAN Ubuntu 14.04 version**. Make sure to name the container before creating it. 

![](http://i68.tinypic.com/27y3nmv.png) 

By now, you've forked the repo and created your CodeAnywhere environment. But wait- [what is MEAN again?](http://learn.mean.io/). Our own ADSK engineers are primary contributors to the [mean.io](https://mean.io) project. Check out their Slack [channel](https://autodesk.slack.com/messages/gamedev-website/details/).

In CodeAnywhere, open an **SSH Terminal** by right-clicking on your new container: 

![](http://i68.tinypic.com/33axpog.jpg)

We're going to [clone](https://help.github.com/articles/cloning-a-repository/) the repository we forked earlier to our CodeAnywhere cloud environment. Go to your open GitHub window and copy the repository link using “**Clone with HTTPS**”: 

![](http://i64.tinypic.com/szhhd4.jpg) 

Once you've copied the link, go back to the SSH terminal in CodeAnywhere and type in the following command (The SSH terminal doesn't allow keyboard pasting (Ctrl+v), so you'll need to use the browser's right-click Paste function): 
 
   `git clone [PASTE YOUR LINK HERE]`

Do you see a **mean_adsk** folder on the left-hand side of the CodeAnywhere environment? No? Right-click the container and **Refresh**. 

![](http://i63.tinypic.com/52yzyq.jpg)

We also want to navigate to the mean_adsk folder using the following command: 

  `cd mean_adsk`

We'll also need to run the following two commands, line by line (Disregard the nasty error message):
 
   `git branch -r | grep -v '\->' | while read remote; do git branch --track "${remote#origin/}" "$remote"; done`
   
   `git fetch --all`

What just happened? [What's with all these commands?](https://services.github.com/kit/downloads/github-git-cheat-sheet.pdf)

Next, run the following command to verify you have all of the available [branches](https://guides.github.com/activities/hello-world/) If you want to learn more about branches, go [here](https://git-scm.com/book/en/v1/Git-Branching-What-a-Branch-Is):
 
   `git branch`

At this point, it should be around 15 minutes into the workshop. If it's more like 30 minutes, check in with the facilitator.

Checkout the starter branch:
 
   `git checkout starter`

We need to install dependencies by running the following command (What are dependencies? Good question. A simple explanation is that sometimes when you install programs, they rely on other programs to work, and these other programs are called dependencies. Further understanding is not necessary for the task at hand. Let's table it.): 

   `npm install`

Now you need to open your connection's config file by right-clicking on your container and choosing "Config":

![](http://i66.tinypic.com/315bkep.jpg) 

Almost done.
In your config file, set the current working directory to point to your `mean_adsk` directory:  

   `"cwd": "~/workspace/mean_adsk"` 

![](http://i66.tinypic.com/2ljkivq.jpg)

Remember to save often when you're editing files. 

That's it.

You've finished creating and configuring your first cloud development environment. You installed absolutely nothing locally, and you've accomplished all of those tasks just using Chrome. 

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

* [Setting up the database](instructions/branch0.md) 
