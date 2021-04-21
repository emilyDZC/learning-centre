const express = require("express");
const router = express.Router();
const {
  getPosts,
  addPost,
  updatePost,
  deletePost,
} = require("../controllers/postsController");

router.route("/").get(getPosts).post(addPost);
router.route("/:id").patch(updatePost).delete(deletePost);

module.exports = router;
