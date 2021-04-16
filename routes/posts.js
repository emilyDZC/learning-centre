const express = require("express");
const router = express.Router();
const { getPosts, addPost } = require("../controllers/postsController");

router.route("/").get(getPosts).post(addPost);

module.exports = router;
