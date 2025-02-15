const User = require("../models/users");
const Profile = require("../models/profile");
const { userSignUpSchema, userSignInSchema } = require("../utils/zodAuth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ZodError } = require("zod");
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const validateSignUp = await userSignUpSchema.parseAsync(req.body);
    const {
      firstName,
      lastName,
      email,
      password,
      accountType,
      confirmPassword,
    } = validateSignUp;

    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
      return res.status(409).json({
        message: "User is already present, use another email",
      });
    }

    if (password !== confirmPassword) {
      return res.status(409).json({
        message: "Your password and confirm password does not match, try again",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const ProfileRes = await Profile.create({
        address:null,
        phone:null,
        dateofbirth:null,
        gender:null
    }) 

    const response = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType,
      additionalDetails:ProfileRes._id
    });

    if (!response) {
      return res.status(403).json({
        message: "Invalid credentials, try again",
      });
    }

    response.password = undefined;

    res.status(200).json({
      message: "User is created Successfully.",
      data: response,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      res.status(400).json({
        message: "Validation failed",
        error: error.errors,
      });
    } else if (error.name === "TimeoutError") {
      res.status(408).json({
        message: "Request timeout, please try again later",
      });
    } else {
      res.status(500).json({
        message: "Internal server error, signup again or after sometime",
        error:error.errors
      });
    }
  }
};

exports.signin = async (req, res) => {
  try {
    const validationSignIn = await userSignInSchema.parseAsync(req.body);
    const { email, password } = validationSignIn;

    

    const response = await User.findOne({ email }).populate("additionalDetails");
    if (!response) {
      return res.status(404).json({
        message: "user is not present, please first signup",
      });
    }

    const matchPassword = await bcrypt.compare(password, response.password);
    if (!matchPassword) {
      return res.status(408).json({
        message: "Incorrect Password, try again."
      });
    }

    const token = await jwt.sign(
      {
        id: response._id,
        email: response.email,
        accountType: response.accountType,
      },
      process.env.JWT_SECRET_KEY, 
      {
        expiresIn:"24h"
      }
    ); 

    response.token = token;
    response.password = undefined;

    const options = {  
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 ),
        httpOnly: true
    }

    res.cookie("token", token, options).status(200).json({
        success:true,
        token,
        response,
        message:"user is signin, successfully"
    })

  } catch (error) {
    if(error instanceof ZodError){
        return res.status(408).json({
            message:"invalid credentials",
            error:error.errors
        })
    }else if (error.name === "TimeoutError") {
        res.status(408).json({
          message: "Request timeout, please try again later",
        })
    }
    else{
        return res.status(500).json({
            message:"Server error",
            error:error.message
        })
    }
  }
};
