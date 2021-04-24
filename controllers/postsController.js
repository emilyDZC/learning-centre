const Post = require("../models/Post");
const Subject = require("../models/Subject");

// @desc    Get all posts
// @route   GET /api/v1/posts
// @access  Public

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: posts.length,
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Add post
// @route   POST /api/v1/posts
// @access  Public

exports.addPost = async (req, res, next) => {
  try {
    const subject = await Subject.find({ name: req.body.subject }).limit(1);
    const subjectId = subject[0]._id;

    const { title, body, tags, links, subTopic } = req.body;

    const post = await Post.create({
      title,
      body,
      tags,
      links,
      subject: subjectId,
      subTopic,
    });
    await post.save();

    subject[0].posts.push(post._id);
    await subject[0].save();

    return res
      .status(201)
      .json({ success: true, data: post, subject: subject[0] });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      res.status(400).json({ success: false, error: messages });
    } else {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
};

// @desc    Delete post
// @route   DELETE /api/v1/post/:id
// @access  Public

exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ success: false, error: "No post found" });
    }

    await post.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Edit post
// @route   PATCH /api/v1/post/:id
// @access  Public

exports.updatePost = async (req, res, next) => {
  try {
    let post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ success: false, error: "No post found" });
    }

    post.set(req.body).save();
    return res.status(200).json({ success: true, data: post });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
