const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    gender:{
        type:String,
        enum:["Male", "Female", "Other"]
    },
    dateofbirth:{
        type:Date,
    },
    about:{
        type:String
    },
    contactNumber:{
        type:Number,
        trim:true
    }
})

module.exports = new mongoose.model("Profile", profileSchema);