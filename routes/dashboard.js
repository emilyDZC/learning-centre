const express = require("express");
const router = express.Router();
const { getSubjects } = require("../controllers/dashboardController");

router.route("/").get(getSubjects);

module.exports = router;
