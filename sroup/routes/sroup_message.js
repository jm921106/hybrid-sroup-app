var express = require('express');
var router = express.Router();

/* GET sroup_message page. */
router.get('/', function(req, res, next) {
  res.render('sroup_message', {
    title: 'sample' 
  });
});
module.exports = router;
