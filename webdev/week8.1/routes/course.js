const { Router } = require("express");
const { purcahseModel, courseModel } = require("../db");
const { userMiddleware } = require("../middleware/user");
const courseRouter = Router();

courseRouter.post("/purchase",userMiddleware, async function (req, res) {
  try{
    const userId = req.userId;
    const courseId = req.body.courseId
    const resp = await purcahseModel.create({userId, courseId})
    res.json({
      message: "You've successfully bought the course",
    });
  }catch(err){
    res.json({
      message:"server error"
    })
  }

  
});

courseRouter.get("/preview", userMiddleware, async function (req, res) {
  try{
    
    const resp = await courseModel.find({})
    res.json({
      message: "preview all course on web",
      data:resp
    });
  }catch(err){
    res.json({
      message:"Invalid credentials"
    })
  }
  
});

module.exports = { courseRouter };
