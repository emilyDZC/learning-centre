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
