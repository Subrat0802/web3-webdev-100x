const mongoose = require("mongoose");

const ratingAndReviewsSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true,
        ref:"User"
    },
    rating: {
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports = mongoose.model("RatingAndReview", ratingAndReviewsSchema)