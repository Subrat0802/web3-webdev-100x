const Profile = require("../models/profile");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !accountType
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const profileUpdate = await Profile.create({
      gender: null,
      datofBirth: null,
      about: null,
      contactNumber: null,
      address: null,
      pincode: null,
    });

    if (password !== confirmPassword) {
      return res.status(405).json({
        message: "Password and confirm does not match.",
        success: false,
      });
    }
    const checkExistingUser = await User.findOne({ email: email });
    if (checkExistingUser) {
      return res.status(404).json({
        success: false,
        message: "user already exist. please try again with different account.",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType,
      additionalDetails: profileUpdate._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    });
    return res.status(200).json({
      success: true,
      message: "user account is created, signup successfull.",
      data: createUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error.",
      success: false,
    });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({
        message: "All fields are required.",
        success: false,
      });
    }

    const checkExistingUser = await User.findOne({ email: email });

    if (!checkExistingUser) {
      return res.status(404).json({
        message:
          "user with this email not exist. please use right email address.",
        success: false,
      });
    }

    const comparePassword = bcrypt.compare(
      password,
      checkExistingUser.password
    );

    if (!comparePassword) {
      return res.status(408).json({
        message: "incorrect password.",
        success: false,
      });
    }

    const token = jwt.sign(
      {
        email: checkExistingUser.email,
        id: checkExistingUser._id,
        accountType: checkExistingUser.accountType,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    const afterUpdateUserToken = await User.updateOne(
      { _id: checkExistingUser._id },
      { $set: { token: token } }
    );
    checkExistingUser.token = token;
    checkExistingUser.password = undefined;

    const options = {
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    return res.cookie("token", token, options).status(200).json({
      message: "user is signin successfully",
      success: true,
      user: checkExistingUser,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};
