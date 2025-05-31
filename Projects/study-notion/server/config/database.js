const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => {
        console.log("DB conected successfully");
    }).catch((err) => {
        console.log("DB connection failed", err);
        console.log(error);
        process.exit(1);
    })
}