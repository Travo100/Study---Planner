// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var plan = {
  all: function(cb) {
    orm.all("plans", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("plans", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("plans", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("plans", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (plansController.js).
module.exports = plan;
