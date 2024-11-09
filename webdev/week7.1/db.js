const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = Schema({
    email: {type: String, unique:true},
    password:String,
    username:String
})

const Todo = Schema({
    title:String,
    done:Boolean,
    userId:ObjectId
})

const UserModel = mongoose.model("users", User)
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
    UserModel,
    TodoModel
}

