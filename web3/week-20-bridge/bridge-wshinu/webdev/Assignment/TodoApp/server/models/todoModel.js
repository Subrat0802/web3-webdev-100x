const mongoose = require("mongoose");

const todoModel = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:100
    },
    description:{
        type:String,
        required:true,
        maxLength:200
    },
    doneOrNot:{
        type:Boolean,
        required:true
    }

},{timestamps:true})

module.exports = mongoose.model("TODO", todoModel);