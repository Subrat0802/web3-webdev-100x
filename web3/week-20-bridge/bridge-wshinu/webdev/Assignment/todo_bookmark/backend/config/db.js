const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("DB is connected");
    })
    .catch((err) => {
        console.log("error while connecting to DB");
        console.log(err);
        process.exit(1);
    })
}

module.exports = connectDB;