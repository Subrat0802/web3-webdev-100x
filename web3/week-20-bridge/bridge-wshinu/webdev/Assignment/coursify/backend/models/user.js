const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://piyushsubrat8:tS3JGr5R50OYSLh0@cluster0.talyj.mongodb.net/new-todo"
);

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      enum: ["Admin", "Student", "Instructor"],
    //   required: true,
    },
    image: {
      type: String,
    },
    token: {
      type: String,
    },
    profileDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

module.exports = new mongoose.model("User", userSchema);
