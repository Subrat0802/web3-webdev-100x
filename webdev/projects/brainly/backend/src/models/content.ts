import mongoose, { model, Schema} from "mongoose"


const contentSchema = new Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    type:{
        type:String,
        enum:["youtube", "twitter", "other"],
        required:true
    },
    link:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"users",
        required:true
    }
})

export const contentModel = model("contents", contentSchema)
