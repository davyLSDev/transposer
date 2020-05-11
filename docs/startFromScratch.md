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

## A few more things to get in place (see Dan's first tutorial)

1. touch spec/indexSpec.js
2. edit indexSpec.js an deposit the following

```
t Browser = require('zombie');
Browser.localhost('example.com', 3000);
describe('the landing page', () => {
  let browser;
  /**
   * This loads the running web application
   * with a new `zombie` browser before each test.
   */
  beforeEach(done => {
    browser = new Browser();

    browser.visit('/', err => {
      if (err) return done.fail(err);
      done();
    });
  });

  /**
   * Your first test!
   *
   * `zombie` has loaded and rendered the page
   * returned by your application. Use `jasmine`
   * and `zombie` to ensure it's doing what you
   * expect.
   *
   * In this case, I just want to make sure a
   * page title is displayed.
   */
  it('displays the page title', () => {
    browser.assert.text('h1', ‘transposer’);
  });

  /**
   * Put future tests here...
   */

});
```
3. Edit the routes/index.js file and make it look like:

```
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // The old command
  //res.render('index', { title: 'Express' });

  // The new test-friendly command
  res.render('index', { title: 'transposer' });
});

module.exports = router;
```


## Caveats
* replace **transposer** with the name of your application you are making

# Instructions after the fact

So, I made the project and committed to github before doing any of the above. So to remedy that, create a temporary place to redo all of the above, then move all the new folders into your application directory that you have already set up. You should be good to go.
