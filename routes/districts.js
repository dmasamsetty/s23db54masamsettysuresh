var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('districts', { title: 'Search Results Districts' });
});

module.exports = router;
