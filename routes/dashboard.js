const express = require("express");
const router = express.Router();
const {
  getSubjects,
  addSubject,
} = require("../controllers/dashboardController");

router.route("/").get(getSubjects).post(addSubject);

module.exports = router;
