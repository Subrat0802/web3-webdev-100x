const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    }, 
    description:{
        type:String,
        required:true,
        trim:true
    }, 
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    whatYouWillLearn:{
        type:String,
    },
    courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Section"
        }
    ],
    ratingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"RatingAndReview"
        }
    ],
    price:{
        type:Number,
        required:true
    },
    thumbnails:{
        type:String
    },
    tag:{
        type:[String],
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    status: {
		type: String,
		enum: ["Draft", "Published"],
	},
    studentEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
            // required:true,
            ref:"User"
        }
    ]
}, {timestamps:true})


module.exports = mongoose.model("Course", courseSchema);