var express = require('express');
var router = express.Router();

/* GET sroup_home page. */
router.get('/', function(req, res, next) {
  res.render('sroup_home', {
    test: 'sroup_home'
  });
});
module.exports = router;
