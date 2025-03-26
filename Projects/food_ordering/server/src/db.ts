import mongoose, { model } from "mongoose";

mongoose.connect("mongodb://localhost:27017/");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        trim:true
    },
    username:{
        type:String,
        trim:true
    },
    password:{
        type:String,
    },
})

export const userModel = model("User", userSchema);