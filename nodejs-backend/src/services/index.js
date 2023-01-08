const users = require("./users/users.service.js");
const customers = require("./customers/customers.service.js");
const company = require("./company/company.service.js");
const notes = require("./notes/notes.service.js");
const tasks = require("./tasks/tasks.service.js");
const monthlysales = require("./monthlysales/monthlysales.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(customers);
  app.configure(company);
  app.configure(notes);
  app.configure(tasks);
  app.configure(monthlysales);
  // ~cb-add-configure-service-name~
};
