const Course = require("../models/course");
const User = require("../models/user");

exports.createCourse = async (req, res) => {
  console.log("Hello");
  try {
    const {id} = req.user;


    console.log("ID", id);
    const {
      courseName,
      courseDescription,
      whatYouWillLearn,
      courseContent,
      price,
      thumbnail,
    } = req.body;

    if (
      !courseName ||
      !courseDescription ||
      !whatYouWillLearn ||
      !price ||
      !thumbnail 
    ) {
      return res.status(408).json({
        message:"All fields are required"
      });
    }

    const checkInstructor = await User.findOne({_id:id});

    if(!checkInstructor){
      return res.status(404).json({
        message:"Error while creating course, and validating Instructor"
      })
    }

    const response = await Course.create({courseName,
      courseDescription,
      instructor: id,
      whatYouWillLearn,
      courseContent,
      ratingAndReviews:null,
      price,
      thumbnail,
      tag:null,
      StudentsEnrolled: null});


      res.status(200).json({
        message:"Course is created. ",
        data: response
      })
  } catch (error) {
    return res.status(500).json({
      message:"Server error while creating course"
    })
  }
};



exports.buyCourse = (req, res) => {
  try{
    const {id} = req.user;
    
  }catch(error){

  }
}