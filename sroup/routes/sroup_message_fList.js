var express = require('express');
var router = express.Router();

/* GET sroup_message_fList page. */
router.get('/', function(req, res, next) {
  res.render('sroup_message_fList', {
    title: 'sample' 
  });
});
module.exports = router;
