const Project = require("../models/Project");
const Subject = require("../models/Subject");

// @desc    Get all projects
// @route   GET /api/v1/projects
// @access  Public

exports.getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Add project
// @route   POST /api/v1/projects
// @access  Public

exports.addProject = async (req, res, next) => {
  try {
    const subject = await Subject.find({ name: req.body.subject }).limit(1);
    const subjectId = subject[0]._id;

    const { title, description, image, link } = req.body;

    const project = await Project.create({
      title,
      description,
      image,
      link,
      subject: subjectId,
    });
    await project.save();

    subject[0].projects.push(project._id);
    await subject[0].save();

    return res
      .status(201)
      .json({ success: true, data: project, subject: subject[0] });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      res.status(400).json({ success: false, error: messages });
    } else {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
};

// @desc    Delete project
// @route   DELETE /api/v1/project/:id
// @access  Public

exports.deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: "No project found" });
    }

    await project.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Edit project
// @route   PATCH /api/v1/project/:id
// @access  Public

exports.updateProject = async (req, res, next) => {
  try {
    let project = await Project.findById(req.params.id);

    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: "No project found" });
    }

    project.set(req.body).save();
    return res.status(201).json({ success: true, data: project });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
