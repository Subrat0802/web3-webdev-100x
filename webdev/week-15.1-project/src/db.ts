import mongoose, {model, Schema} from "mongoose"

mongoose.connect("")


const userSchema = new Schema({
    username:{
        type:String,
        unique:true
    },
    password:String
});

export const UserModel = model("User", userSchema)

