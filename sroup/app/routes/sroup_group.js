var task = require('../controllers/group_controller.js');

exports.route = function(app) {
  app.get('/sroup_group', task.group_view);
  app.post('/group_add', task.group_add);
  app.post('/group_delete', task.group_delete);
  app.post('/group_search', task.group_search);
};
