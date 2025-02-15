const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    address:{
        type:String,
        trim:true
    },
    phone:{
        type:String,
        trim:true
    },
    dateofbirth:{
        type:String
    },
    gender:{
        type:String,
        enum:["Male", "Female", "Other"]
    }
}, { timestamps: true })

module.exports = mongoose.model("Profile", profileSchema)