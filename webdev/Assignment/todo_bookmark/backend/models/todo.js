const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:50,
        trim:true
    },
    description:{
        type:String,
        maxLength:100,
        required:true,
        trim:true
    },
    status:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    },
    updatedAt:{
        type:String,
        required:true,
        default:Date.now()
    }

})

module.exports = mongoose.model("Todo", todoSchema);