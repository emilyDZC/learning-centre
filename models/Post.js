const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a title"],
  },
  body: {
    type: String,
    trim: true,
  },
  tags: {
    type: Array,
  },
  links: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
  },
  subTopic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubTopic",
  },
});

module.exports = mongoose.model("Post", PostSchema);
