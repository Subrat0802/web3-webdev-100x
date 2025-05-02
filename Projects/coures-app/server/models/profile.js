const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    gender:{
        type:String
    },
    datofBirth:{
        type:String
    },
    about:{
        type:String,
        trim:true
    },
    contactNumber:{
        type:Number,
        trim:true
    },
    address:{
        type:String,
        trim:true
    },
    pincode:{
        type:Number,
        trim:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;