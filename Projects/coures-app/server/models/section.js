const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
    sectionName:{
        type:String,
        required:true,
        trim:true
    },
    subSection:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubSection"
    }]
},{timestamps:true})

const Section = mongoose.model("Section", sectionSchema);
module.exports = Section;