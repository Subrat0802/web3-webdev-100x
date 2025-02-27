import mongoose, {model, Schema} from "mongoose"

mongoose.connect("mongodb://localhost:27017/brainly");
  


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
        title:{type:String},
        tag: [{type:mongoose.Types.ObjectId, ref:"Tag"}],
        userId:{type:mongoose.Types.ObjectId, ref:"User", required:true}
    
})

export const contentModel = model("ContentSchema", contentSchema) 


const LinkSchema = new Schema({
    hash:String,
    userId:{type:mongoose.Types.ObjectId, ref:"User", required:true, unique:true}   
})

export const linkModel = model("Links", LinkSchema);

