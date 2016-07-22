var express = require('express');
var router = express.Router();

/* GET sroup_myInfo page. */
router.get('/', function(req, res, next) {
  res.render('sroup_myInfo', {
    title: 'sample' 
  });
});
module.exports = router;
