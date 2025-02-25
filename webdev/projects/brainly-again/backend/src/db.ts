import mongoose, {Schema} from "mongoose";

mongoose.connect("mongodb://localhost:27017/brainly")

const UserSchema = new Schema({
    username:{type:String, unique:true, required:true},
    password:{type:String, required:true}
})

export const UserModel = mongoose.model("User", UserSchema); 