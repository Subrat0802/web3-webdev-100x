import mongoose, {model, Schema} from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

export const userModel = model("users", userSchema);