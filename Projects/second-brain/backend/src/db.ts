import mongoose, { model } from "mongoose";

mongoose.connect("mongodb://localhost:27017/newBrain");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const userModel = model("User", userSchema);

const contentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tag: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Tag",
      required: true,
    },
  ],
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const conteanrModel = model("Content", contentSchema);

const linkSchema = new mongoose.Schema({
  hash: {
    type: String,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const linkModel = model("Link", linkSchema);