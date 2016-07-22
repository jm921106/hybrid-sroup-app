var express = require('express');
var router = express.Router();
//json 데이터를 여기서만 사용하려면
var jd = require("../jdata.json"); // 한경로 위에서 jdaa.json을 찾는다

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express(my frist nodejs)' ,
    name:'SuperMoon',
    jd_index:jd
  });
});

module.exports = router;
