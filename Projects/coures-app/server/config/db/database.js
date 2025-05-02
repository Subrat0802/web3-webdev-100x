const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(() => {
        console.log("DB connected successfully.")
    }).catch((error) => {
        console.log("error while connecting db", error);
        process.exit(1);
    })
}