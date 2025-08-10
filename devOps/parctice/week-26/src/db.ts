import mongoose from "mongoose";

mongoose.connect("mongodb://mongoagain:27017/vol4")
.then(() => console.log("DB connected successfully"))
.catch((error) => console.log(error));

const userSchema = new mongoose.Schema({
    email:String,
    password:String
})

export const User = mongoose.model("User", userSchema);

