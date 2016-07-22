var express = require('express');
var path = require('path'); // file path 처리시 사용
var morgan = require('morgan');
var compress = require('compression');
var cookieParser = require('cookie-parser'); //cookie
var bodyParser = require('body-parser'); // body parser

// route dir require
var sroup_home = require('../app/routes/sroup_home');
var sroup_message = require('../app/routes/sroup_message');
var sroup_message_send = require('../app/routes/sroup_message_send');
var sroup_message_fList = require('../app/routes/sroup_message_fList');
var sroup_myInfo = require('../app/routes/sroup_myInfo');

module.exports = function () {
    var app = express();

    //process.env.NODE_ENV는 전역 변수이며, 미리 정의된 환경 변수에 대한 접근을 허용
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.use(express.static(path.join(__dirname, '../public')));

    // get method가 넘어올 시...
    app.use('/', sroup_home);
    app.use('/sroup_home', sroup_home);
    app.use('/sroup_message', sroup_message);
    app.use('/sroup_message_send', sroup_message_send);
    app.use('/sroup_message_fList', sroup_message_fList);
    app.use('/sroup_myInfo', sroup_myInfo);

    // view engine setup
    app.set('views', path.join(__dirname, '../app/views'));
    app.set('view engine', 'ejs'); // choice engine

    require('../app/routes/sroup_login.js').route(app); // routes dir file > route(app)
    require('../app/routes/sroup_signup.js').route(app);
    require('../app/routes/sroup_group.js').route(app);
    require('../app/models/mongodb.js').connect(); //express.js와 db연동

    // catch 404 and forward to error handler [에러가 발생시]
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
    // development error handler [개발중인 페이지에 대한 에러를 제공함 - 실제 서비스시 delete]
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });

    return app;
}









