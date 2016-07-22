/**
 * Created by superMoon on 2016-07-19.
 */
var userTasks = require('../models/user_tasks.js');

exports.login_view = function (req, res) {
    //로그인 화면
    res.render('sroup_login', {
        test: '로그인 화면 ! , 로그인을 하세요 ! '
    });
};

exports.login = function (req, res) {
    //로그인 처리
    userTasks.find({u_email: req.body.u_email}, function (err, tasks) {

        if (tasks.length > 0) {
            if (tasks[0].u_pw == req.body.u_pw) { // login success

                res.cookie('login', {
                    auth: true,
                    u_email: req.body.u_email
                });

                res.render('sroup_home', {
                    test: 'login success !',
                    u_email: tasks[0].u_email
                });
            } else { // login fail
                res.render('sroup_login', {
                    test: 'again login ! wrong id or pw'
                });
            }
        } else {
            res.render('sroup_login', {
                test: '아이디가 존재하지 않습니다.'
            });
        }
    });
};

