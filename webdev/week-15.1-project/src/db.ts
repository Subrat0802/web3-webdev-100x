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
        title:{type:String},
        tag: [{type:mongoose.Types.ObjectId, ref:"Tag"}],
        userId:{type:mongoose.Types.ObjectId, ref:"User", required:true}
    
})

export const contentModel = model("ContentSchema", contentSchema) 
<<<<<<< HEAD

const LinkSchema = new Schema({
    hash:String,
    userId:{type:mongoose.Types.ObjectId, ref:"User", required:true, unique:true}   
})

export const linkModel = model("Links", LinkSchema);
=======
>>>>>>> 02fa1bc865db0b17f8b7ceb2b7958b14fc979788
