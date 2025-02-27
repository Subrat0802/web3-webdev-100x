const Course = require("../models/course");
const User = require("../models/user");
const { z } = require("zod");

const createCousreVal = z.object({
  courseName: z.string().min(3, "Title must be at least 3 characters long"),
  courseDescription: z
    .string()
    .min(10, "Description must be at least 10 characters long"),
});

exports.createCourse = async (req, res) => {
  try {
    const validateCreateCourse = await createCousreVal.parseAsync(req.body);
    //check user is instructor or not
    const { courseName, courseDescription } = validateCreateCourse;

    const userId = req.user.id;
    const userAccount = req.user.accountType;

    const checkUserIsInst = await User.findById(userId);

    if (!checkUserIsInst) {
      return res.status(403).json({
        message: "Invalid credential no user found, cookie wrong",
      });
    }

    if (checkUserIsInst.accountType !== "Instructor") {
      return res.status(403).json({
        message: "Invalid credentials, only instructors can create courses",
      });
    }

    const response = await Course.create({
      courseName,
      courseDescription,
      courseCreator: userId,
    });

    if (!response) {
      return res.status(400).json({ message: "Course not created" });
    }

    await User.findByIdAndUpdate(
      userId,
      { $push: { courses: response._id } },
      { new: true }
    );

    res.status(200).json({
      message: "Course is created successfully",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        message: "Input error",
        errors: error.errors,
      });
    } else if (error.name === "TimeoutError") {
      res.status(404).json({
        message: "Request timeout. Please Try Again Later.",
      });
    } else {
      res.status(500).json({
        message: "Internal Server Error. Signup failed.",
      });
    }
  }
};

exports.getCoursesCreatedByInstructor = async (req, res) => {
  try {
    const userId = req.user.id;
    const response = await Course.find({ courseCreator: userId });
    if (!response) {
      res.status(400).json({
        message: "No course created by User",
      });
    }
    res.json({
      message: "Courses created by user",
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.body;
    const userId = req.user.id;
    const response = await Course.findByIdAndDelete(id);
    if (!response) {
      return res.status(403).json({
        message: "Unable to delete course",
      });
    }
    const userResponse = await User.findByIdAndUpdate(
      userId,
      { $pull: { courses: id } },
      { new: true }
    );
    if (!userResponse) {
      return res.status(403).json({
        message: "Unable to delete course, user not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Course is successfully deleted from your account",
    });
  } catch (err) {
    console.error("Error deleting course:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const userId = req.user.id;

    const resposne = await Course.find();
    if (!resposne) {
      return res.status.json({
        message: "no course found",
      });
    }
    res.status(200).json({
      data: resposne,
      message: "All courses",
    });
  } catch (err) {
    console.error("Error deleting course:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
