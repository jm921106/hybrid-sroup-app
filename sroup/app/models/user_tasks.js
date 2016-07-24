/**
 * Created by superMoon on 2016-07-19.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({ //user = mongoose 스키마 정의
    //object_id
    u_id : String,
    u_email : String,
    u_pw : String,
    u_name : String,
    u_date : Date
});

module.exports = mongoose.model('userTasks', user); // 'userTasks'로 user 스키마를 넘겨준다.