const mongoose = require("mongoose");

const courseProgressSchema = new mongoose.Schema({
    courseId:{
        type:mongoose.Types.Schema.ObjectId,
        ref:"Course"
    },
    completedVideo:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubSection"
    }]
})

const CourseProgress = mongoose.model("CourseProgress", courseProgressSchema);
module.exports = CourseProgress;