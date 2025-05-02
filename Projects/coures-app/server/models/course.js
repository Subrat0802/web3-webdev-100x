const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName:{
        type:String, 
        require:true
    },
    courseDescription:{
        type:String,
        required:true
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }, 
    whatYouWillLearn:{
        type:String,
        trim:true,
        required:true
    },
    courseContent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section"
    },
    ratingAndReviews:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview"
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    thumbnail:{
        type:String,
    },
    tag:{
        type:[String],
    },
    StudentsEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]  
}, {timestamps:true});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;