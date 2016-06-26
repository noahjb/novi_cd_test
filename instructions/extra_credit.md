#Extra Credit
If you're at this point, you've probably finished building our little ToDo web app in 1/4 or 1/2 the time we allotted. You're a [bad](https://www.youtube.com/watch?v=dsUXAEzaC3Q) a$$!

Your ToDo app is a pretty simple [SPA](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=single%20page%20application): it queries a database, lists the result of that query to a web page, allows you to add and delete items from the database, and that's about it. You've basically built an app that does CRD (Create, Read, Delete). 

##Requirement 1: Allow updates to existing items in the database
We'd like to see your app support [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete). 

You'll need at a minimum to make changes to...
- Routes in `server.js`
- Add logic to handle updates in `mainController`
- Make changes to the front-end in `index.html`.

When you're done writing and testing your code, feel free to make a [pull request](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=how%20to%20make%20a%20pull%20request) to this repo.

##Requirement 2: Sort and filter the items on the web page
We want [this](https://scotch.io/tutorials/sort-and-filter-a-table-using-angular) to all occur on the front-end in `index.html` using Angular.

When you've tested it out, submit a pull request.

##Requirement 3: Test the routes with Jasmine
Use [Jasmine](http://jasmine.github.io/2.4/node.html) to create BDD-style tests for your routes.

Per usual: pull requests wanted.

##Requirement 4: User authorization
1.  Implement simple [user authorization](https://www.sitepoint.com/user-authentication-mean-stack/)
2.  Implement [OAuth](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=oauth%20meaning)
3.  Implement an authentication [service](https://www.sitepoint.com/user-authentication-mean-stack/)

##Requirement 4: Improve application structure
- [Restructure](https://scotch.io/tutorials/angularjs-best-practices-directory-structure) the app so it's more modular and easier to test.
