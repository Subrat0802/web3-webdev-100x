const mongoose = require("mongoose");


const subSectionSchema = mongoose.Schema({
    title:{
        type:String,
    },
    timeDuration:{
        type:String
    },
    description:{
        type:String
    },
    videoUrl:{
        type:String
    }
}, {timestamps:true})

module.exports = mongoose.model("SubSections", subSectionSchema);
