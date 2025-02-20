
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://piyushsubrat8:tS3JGr5R50OYSLh0@cluster0.talyj.mongodb.net/keyManagement")

const UserSchema = mongoose.Schema({
    username:String,
    password:String,
    privateKey:String,
    publicKey:String
})

const userModel = mongoose.Model("users", UserSchema)

module.exports = {
    userModel
}