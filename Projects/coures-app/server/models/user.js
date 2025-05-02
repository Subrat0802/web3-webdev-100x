const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
        trim:true
    },
    lastName:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    password:{
        type:String,
        require:true,
        trim:true
    },
    accountType:{
        type:String,
        enum:["Student", "Instructor", "Admin"],
        require:true,
    },
    active:{
        type:Boolean,
        default:true
    },
    approved:{
        type:Boolean,
        default:true    
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile",
        required:true
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
        },
    ],
    courseProgress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CourseProgress"
    },
    image:{
        type:String,
        required:true
    },
    token:{
        type:String
    }
},{timestamps:true}
)

const User = mongoose.model("User", userSchema);
module.exports = User;