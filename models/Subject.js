const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add a name"],
  },
  links: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  subTopics: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTopic",
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
});

module.exports = mongoose.model("Subject", SubjectSchema);
