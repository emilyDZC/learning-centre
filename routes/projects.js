const express = require("express");
const router = express.Router();
const {
  getProjects,
  addProject,
} = require("../controllers/projectsController");

router.route("/").get(getProjects).post(addProject);

module.exports = router;
