const Subject = require("../models/Subject");

// @desc    Get all subjects
// @route   GET /api/v1/subjects
// @access  Public

module.exports.getSubjects = async (req, res, next) => {
  try {
    const subjects = await Subject.find();

    return res.status(200).json({
      success: true,
      count: subjects.length,
      subjects: subjects,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Add subject
// @route   POST /api/v1/subjects
// @access  Public

module.exports.addSubject = async (req, res, next) => {
  try {
    const subject = await Subject.create(req.body);

    return res.status(201).json({ success: true, data: subject });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      res.status(400).json({ success: false, error: messages });
    } else {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
};
