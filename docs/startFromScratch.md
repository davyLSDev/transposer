# Instructions for starting a project from scratch

1. cd to whatever directory is your base directory for projects of this type
2. npx express-generator --view=ejs transposer
3. cd myapp
4. npm install
5. npm install --save-dev jasmine
6. npx jasmine init
7. npm install --save-dev zombie

## To run the web application continuously while developing
1. npm install nodemon -g
2. run the server like this> nodemon transposer

## Caveats
* replace **transposer** with the name of your application you are making

# Instructions after the fact

So, I made the project and committed to github before doing any of the above. So to remedy that, create a temporary place to redo all of the above, then move all the new folders into your application directory that you have already set up. You should be good to go.
