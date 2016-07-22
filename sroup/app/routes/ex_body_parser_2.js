// <form method="post" enctype="multipart/form-data">
//     <input type="file" name="image" />
//
// var fs = require('fs');
// var http = require('http');
// var express = require('exppress');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
//
// var app = express();
//
// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.limit('10mb'));
// app.use(express.bodyParser({uploadDir: __dirname + '/multipart'}));
//
// app.get('/', function (req, res) {
//     fs.readFile("HTMLPage.html", function (err, data) {
//         res.send(data.toString());
//     });
// });
//
// app.post('/', function (req, res) {
//     console.log(req.body);
//     console.log(req.files);
//
//     req.redirect('/');
// });

// app.post('/', function (req, res) {
//     var comment = req.param('comment');
//     var imageFile = req.files.image;
//
//     if (imageFile) {
//         var name = imageFile.name;
//         var path = imageFile.path;
//         var type = imageFile.type;
//
//         if(type.indexOf('image') != -1 ){ // == image file
//             var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
//
//             fs.rename(path, outputPath, function(err) {
//                 res.redirect('/');
//             });
//         }  else { // != image file
//             fs.unlink(path, function(err) {
//                res.send(400);
//             });
//         }
//     } else { // file이 없을 경우
//         res.send(404);
//     }
// });
//
// <input type="file" multiple="multiple" />