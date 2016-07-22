// var fs = require('fs');
// var http = require('http');
// var express = require('express');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var expressSession = require('express-session');
//
// var app = express();
//
// app.use(session({
//     secret: 'secret key',
//     key : 'rint',
//     cookie:{
//         maxAge: 60*1000
//     }
// }));
// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
//
// app.use(function (req, res) {
//     var output = {};
//     output.cookies = req.cookies;
//     output.session = req.session;
//
//     req.session.now = (new Date()).toUTCString();
//
//     res.send(output);
// });

// key , 쿠기의 name속성을 지정
// store , 세션 저장소를 지정
// cookie , 생성할 cookie와 관련된 정보를 지정
//
// cookie 속성을 입력하지 않을 시
// { path:'/', httpOnly:true, maxAge:null}
//
// regenerate() , 세션을 다시 생성
// destroy() , 세션을 제거
// reload() , 세션을 다시 불러옴
// save(), 세션을 저장

// // 브라우저를 종료하고 다시 실행하면 connect.sid 쿠키가 소멸
// // 클라이언트는 자신이 소유한 정보를 잃음
// // 데스크톱 웹페이지는 대부분 로그인을 하고나서
// // 웹 브라우저를 종료시 세션 식별자 쿠기가 소멸 자동으로 로그아웃
// //
// // 그렇다면 세션은 언제까지 유지?
// // express 모듈은 웹 브라우저가 켜져있는 동안만 세션을 유지
// // 만약 쿠기가 사라지는 시간과 쿠기의 name 속성을 바꾸고 싶다면
// // session() 메서드의 매개변수에 옵션 객체를 입력