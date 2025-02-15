const mongoose = require("mongoose");

const sectionSchema = mongoose.Schema({
    sectionName:{
        type:String,
    },
    subSection:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"SubSections"
        }
    ]
}, {timestamps:true})


module.exports = mongoose.model("Sections", sectionSchema)