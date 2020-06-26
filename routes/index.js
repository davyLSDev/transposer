var express = require('express');
var router = express.Router();
transposed = ''

/* GET home page. */
router.get('/', function(req, res, next) {
  // The old command
  //res.render('index', { title: 'Express' });

  // The new test-friendly command
  res.render('index', { title: 'transposer' });
});

/* POST original song */
router.post('/transpose', function(req, res, next) {
  transposed = req.body.originalSong;
});

module.exports = router;
