const Section = require("../models/Section");
const Course = require("../models/Course");

exports.createSection = async (req, res) => {
  try {
    //data fetch
    const { sectionName, courseId } = req.body;
    //data validation
    if (!sectionName || !courseId) {
      return res.status(408).json({
        message: "Missing properties",
        success: false,
      });
    }
    //create section
    const newSection = await Section.create({ sectionName });
    //update course schema
    const updateCourseDetails = await Course.findByIdAndUpdate(
      { courseId },
      {
        $push: {
          courseContent: newSection._id,
        },
      },
      {
        new: true,
      }
    );
    //return response
    return res.status(200).json({
      message: "Cousre Section created successfully",
      data: updateCourseDetails,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while creating Section",
      error: error.message,
      success: false,
    });
  }
};

//update section

exports.updateSection = async (req, res) => {
  try {
    //data input
    const { sectionName, sectionId } = req.body;
    //data validation
    if (!sectionName || !sectionId) {
      return res.status(408).json({
        message: "Missing properties",
        success: false,
      });
    }
    //update data
    const sectionUpdate = await Section.findByIdAndUpdate(
      { sectionId },
      {
        sectionName,
      },
      { new: true }
    );

    //return res
    return res.status(200).json({
      message: "Cousre Section updated successfully",
      data: sectionUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while updating Section",
      error: error.message,
      success: false,
    });
  }
};

//delete section

exports.deleteSection = async (req, res) => {
  try {
    const { sectionId } = req.params;

    //use findByIdAnd delete
    await Section.findByIdAndDelete(sectionId);

    //return res
    return res.status(200).json({
      message: "Cousre Section deleted successfully",
      data: sectionUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while deleting Section",
      error: error.message,
      success: false,
    });
  }
};
