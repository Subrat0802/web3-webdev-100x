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
        ref:"user",
        required:true
    },
    
})