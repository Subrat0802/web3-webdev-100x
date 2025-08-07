import mongoose from "mongoose";

mongoose.connect("mongodb://mongoagain:27017/without_vol")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));



const UserSchema = new mongoose.Schema({
    username:String,
    password:String
});

export const UserModel = mongoose.model("User", UserSchema); 