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

const contentSchema = new Schema({
        type:{type:String},
        link:{type:String},
        tag: [{type:mongoose.Types.ObjectId, ref:"Tag"}],
        userId:{type:mongoose.Types.ObjectId, ref:"User", required:true}
    
})

export const contentModel = model("ContentSchema", contentSchema) 
