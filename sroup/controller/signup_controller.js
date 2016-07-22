/**
 * Created by superMoon on 2016-07-19.
 */
var userTask = require('../models/user_tasks.js');

exports.signup_view = function (req, res) {
    //회원가입화면
    res.render('sroup_signup', {
        test: '회원가입을 하세요 ! '
    });
};

exports.signup = function (req, res) {
    //회원가입부분

    var newTask = true;

    userTask.find({u_email: req.body.u_email}, function (err, tasks) {
        if (err)
            throw err;

        if (tasks.length > 0) {
            console.error('There are same contents already : ' + req.body.email);
            newTask = false;
        }

        if (newTask) {
            new userTask({
                //object_id
                u_id: req.body.u_email,
                u_email: req.body.u_email,
                u_pw: req.body.u_pw,
                u_name: req.body.u_name,
                u_date: new Date()
            }).save();

            console.log('Succeed to create new task {' + req.body.eamil + '}');

            res.render('sroup_login', {
                test: 'do login !'
            });
        } //if

        res.render('sroup_signup', {
            test: 'find new email ! (중복됨)'
        });
    });
};