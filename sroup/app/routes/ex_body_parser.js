// //login.html이 있다고 가정
//
// var fs = require('fs');
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
// app.get('/', function(req, res) {
//    if(req.cookies.auth) {
//        res.send('<h1>Login Success</h1>');
//    } else {
//        res.redirect('/login');
//    }
// });
//
// app.get('/login', function(req, res) {
//     fs.readFile('login.html', function(err, data) {
//        res.send(data.toString());
//     });
// });
//
// app.post('/login', function(req, res) {
//     var id = req.param('id');
//     var pw = req.param('pw');
//
//     console.log(id, pw);
//     console.log(req.body);
//
//     if(id == 'id' && pw == 'pw') {
//         res.cookie('auth', true);
//         res.redirect('/');
//     } else {
//         res.redirect('/login');
//     }
// });