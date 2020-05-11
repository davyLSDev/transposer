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
