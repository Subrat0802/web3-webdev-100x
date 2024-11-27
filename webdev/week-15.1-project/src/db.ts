import mongoose, {model, Schema} from "mongoose"

mongoose.connect("mongodb+srv://piyushsubrat8:tS3JGr5R50OYSLh0@cluster0.talyj.mongodb.net/ts-app")


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

const LinkSchema = new Schema({
    hash:String,
    userId:{type:mongoose.Types.ObjectId, ref:"User", required:true, unique:true}   
})

export const linkModel = model("Links", LinkSchema);