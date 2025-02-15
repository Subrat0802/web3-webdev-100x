const { ZodError } = require("zod");
const Course = require("../models/course");
const { zodCourseSchema } = require("../utils/zodAuth");

exports.createCourse = async (req, res) => {
  try {
    const validationCourse = await zodCourseSchema.parseAsync(req.body);
    const {title, description, whatYouWillLearn, price, thumbnails, tag} = validationCourse;

    const response = await Course.create({
        title, 
        description, 
        whatYouWillLearn, 
        price, 
        thumbnails, 
        tag,
        instructor: req.user.id,
    });

    if(!response){
        return res.status(400).json({
            message:"Error while creating Course, Please try again or after sometimme"
        })
    }

    res.status(200).json({
        data:response,
        message:"Course created successfully"
    })

  } catch (error) {
      if(error instanceof ZodError){
          return res.status(408).json({
              message:"invalid credentials",
              error:error.errors
          })
      }else if (error.name === "TimeoutError") {
          res.status(408).json({
            message: "Request timeout, please try again later",
          })
      }
      else{
          return res.status(500).json({
              message:"Server error",
              error:error.message
          })
      }
    }
};
