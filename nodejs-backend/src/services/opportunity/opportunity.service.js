const { Opportunity } = require('./opportunity.class');
const createModel = require('../../models/opportunity.model');
const hooks = require('./opportunity.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/opportunity', new Opportunity(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('opportunity');

  service.hooks(hooks);
};
