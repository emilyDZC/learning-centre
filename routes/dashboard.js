const express = require("express");
const router = express.Router();
const {
  getSubjects,
  addSubject,
} = require("../controllers/subjectsController");

router.route("/").get(getSubjects).post(addSubject);

module.exports = router;
