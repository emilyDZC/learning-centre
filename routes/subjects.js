const express = require("express");
const router = express.Router();
const {
  getSubjects,
  addSubject,
  getSubject,
  updateSubject,
  deleteSubject,
} = require("../controllers/subjectsController");

router.route("/").get(getSubjects).post(addSubject);
router.route("/:id").get(getSubject).patch(updateSubject).delete(deleteSubject);

module.exports = router;
