var task = require('../controller/login_controller.js');

exports.route = function(app) {
    app.get('/sroup_login', task.login_view);
    app.post('/login', task.login);
};

