var task = require('../controller/signup_controller.js');

exports.route = function(app) {
  app.get('/sroup_signup', task.signup_view);
  app.post('/signup', task.signup);
};

