var groupTask = require('../models/group_tasks.js');


exports.group_view = function(req, res) {
    //group_view 화면 - 자신이 속한 그룹을 보여줌 ,
    var user = "";

    try {
        user = req.cookies.login.u_email
    } catch(exception) {
        user = "로그인이 먼저 필요합니다.";
    }

    res.render('sroup_group', {
        test: user + '의 email로 로그인 되어있는 상태'
    });
};

exports.group_add = function(req, res) {
    //group_add
    res.render('sroup_group', {
        test: 'group_add ! '
    });
};

exports.group_search = function(req, res) {
    //group_search
    res.render('sroup_group', {
        test: 'group_search ! '
    });
};

exports.group_delete = function(req, res) {
    //group_delete
    res.render('sroup_group', {
        test: 'group_delete ! '
    });
};