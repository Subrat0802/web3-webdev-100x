const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name:{
        name:String,
        required:true
    },
    course:[
        { 
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ]
})

module.exports = mongoose.model("Category", categorySchema);