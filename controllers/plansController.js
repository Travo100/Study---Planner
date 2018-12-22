var express = require("express");

var router = express.Router();

// Import the model (plan.js) to use its database functions.
var plan = require("../models/plan.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  plan.all(function(data) {
    var hbsObject = {
      plans: data
    };
    console.log(hbsObject, "These are the subjects ----------------------------------------");
    res.render("index", hbsObject);
  });
});



router.post("/api/plans", function(req, res) {
  console.log(req.body, "This is the subject to be added ")
  plan.create([
    "subject", "finish"
  ], [
    req.body.subject, req.body.finish
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/plans/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  plan.update({
    finish: req.body.finish
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/plans/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  plan.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
