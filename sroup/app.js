var express = require('express');
var path = require('path'); //파일 경로들을 처리할때 사용
var logger = require('morgan');
var cookieParser = require('cookie-parser'); //cookie
var bodyParser = require('body-parser'); // body parser
var session = require('express-session'); // session


var sroup_home = require('./routes/sroup_home');
// var sroup_login = require('./routes/sroup_login');
//var sroup_signup = require('./routes/sroup_signup');
//var sroup_group = require('./routes/sroup_group');
var sroup_message = require('./routes/sroup_message');
var sroup_message_send = require('./routes/sroup_message_send');
var sroup_message_fList = require('./routes/sroup_message_fList');
var sroup_myInfo = require('./routes/sroup_myInfo');

var app = express(); //express 사용하게 해줌
app.locals.activeemail = "";
app.locals.jdata = require("./jdata.json") //경로를 지정해줘야한다 json은 node에의 기능이 아니니까 사용자가 스스로 경로를 추가해줘야함

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //view의 엔진으로 ejs를 사용함 , jade등

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'secret key',
    key : 'rint',
    cookie:{
        maxAge: 60*1000
    }
}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + "/css"));
app.use('/fonts', express.static(__dirname + "/fonts"));
app.use('/img', express.static(__dirname + "/img"));
app.use('/js', express.static(__dirname + "/js"));
app.use('/less', express.static(__dirname + "/less"));
app.use('/vendor', express.static(__dirname + "/vendor"));
app.use('/bower_components', express.static(__dirname + "/bower_components"));
app.use('/dist', express.static(__dirname + "/dist"));

app.use('/', sroup_home);
app.use('/sroup_home', sroup_home);// /sroup_home 요청이 들어올시, sroup_home 라우터를 실행시킴
// app.use('/sroup_login', sroup_login);
//app.use('/sroup_signup', sroup_signup);
//app.use('/sroup_group', sroup_group);
app.use('/sroup_message', sroup_message);
app.use('/sroup_message_send', sroup_message_send);
app.use('/sroup_message_fList', sroup_message_fList);
app.use('/sroup_myInfo', sroup_myInfo);

require('./routes/sroup_login.js').route(app); // routes/sroup_login.js 라우터를 route(app)에 등록
require('./routes/sroup_signup.js').route(app);
require('./routes/sroup_group.js').route(app);
require('./mongodb.js').connect(); //app.js와 db연동

// catch 404 and forward to error handler 에러가 발생시
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler 개발중인 페이지에 대한 에러를 제공함 - 실제 서비스할때는 지우면됨
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
