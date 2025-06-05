const Course = require("../models/Course");
const Tags = require("../models/Tags");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.createCourse = async (req, res) => {
  try {
    //fetch data
    const { courseName, courseDescription, whatYouWillLearn, price, tag } =
      req.body;
    //get thumbnail
    const thumbnail = req.files.thumbnalImages;

    //validation
    if (
      !courseName ||
      !courseDescription ||
      !whatYouWillLearn ||
      !price ||
      !tag
    ) {
      return res.status(407).josn({
        message: "All fields are required",
        success: false,
      });
    }

    //check for instructor
    const userId = req.user.id;
    const instructorDetails = await User.findById(userId);
    console.log("Instructor details", instructorDetails);

    if (!instructorDetails) {
      return res.status(404).json({
        success: false,
        message: "Instructor Details not found",
      });
    }

    //check given tag is valid or not tag is id here
    const tagDetails = await Tags.findById(tag);
    if (!tagDetails) {
      return res.status(409).json({
        message: "Tag is not present",
        success: false,
      });
    }

    //upload image to cloudinary
    const thumbnailImage = await uploadImageToCloudinary(
      thumbnail,
      process.env.COURSE_FOLDER
    );

    //create an entery for new course
    const newCourse = await COurse.create({
      courseName,
      courseDescription,
      instructor: instructorDetails._id,
      whatYouWillLearn,
      price,
      tag: tagDetails._id,
      thumbnail: thumbnailImage.secure_url,
    });

    //add the new course of user schema of instructor

    await User.findByIdAndUpdate(
      { _id: instructorDetails._id },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );

    //update the tag schema

    await Tags.findByIdAndUpdate(
      { _id: tagDetails._id },
      {
        $push: {
          course: newCourse._id,
        },
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Course created successfully",
      success: true,
      data: newCourse,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while creating course",
      error: error.message,
      success: false,
    });
  }
};

//getAllcourses

exports.showAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find(
      {},
      {
        courseName: true,
        price: true,
        thumbnail: true,
        instructor: true,
        ratingAndReviews: true,
        studentEnrolled: true,
      }
    )
      .populate("instructor")
      .exec();

    return res.status(200).json({
      message: "Data for all courses fetched successfully.",
      success: true,
      data: allCourses,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while fetching all course",
      error: error.message,
      success: false,
    });
  }
};
