
// var http = require('http');
// var express = require('express');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
//
// var app = express();
//
// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
//
// app.get('/getCookie', function(req, res) {
//     res.send(req.cookies);
// });
// app.get('/setCookie', function(req, res) {
//     res.cookie('string', 'cookie');
//     res.cookie('json', { name : 'cookie', property: 'delicious'});
//     res.cookie('type', 'cookie', {
//         maxAge : 6000,
//         secure : true
//     });
//     res.redirect('/getCookie');
// });
//
// http.createServer(app).listen(52273, function() {
//    console.log('server on');
// });

// cookie() 메서드 옵션 속성
// httpOnly , 클라이언트의 쿠키 접근 권한을 지정
// secure , secure 속성을 지정
// expires , expires 속성을 지정
// maxAge , 상대적으로 expires 속성을 지정
// path , path 속성을 지정