/**
 * Created by superMoon on 2016-07-19.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var group = new Schema({
   //object_id
    g_id : String,
    g_name : String,
    g_admin : String,
    g_type : Number
});

module.exports = mongoose.model('groupTasks', group); //group 스키마를 groupTasks에 저장함