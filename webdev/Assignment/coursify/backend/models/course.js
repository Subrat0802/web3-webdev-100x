const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseName: { 
        type: String,
        required: true,
        trim: true
    },
    courseDescription: {
        type: String,
        required: true,
        trim: true
    },
    courseCreator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {timestamps:true});


module.exports = mongoose.model("Course", courseSchema);

