const { z } = require("zod");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userSignupSchema = z.object({
  username: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

const userSigninSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

exports.signupUser = async (req, res) => {
    try {
      const validateSignup = await userSignupSchema.parseAsync(req.body);
  
      const { username, email, password, confirmPassword } = validateSignup;
  
      const checkEmail = await User.findOne({ email });
  
      if (checkEmail) {
        res.status(409).json({
          message: "User already exists.",
        });
        return;
      }
  
      if (password !== confirmPassword) {
        res.status(401).json({
          message: "Password and Confirm Password does not match.",
        });
        return;
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const response = await User.create({
        username,
        email,
        password: hashedPassword,
        confirmPassword: hashedPassword,
      });
  
      if (!response) {
        res.status(403).json({
          message: "Invalid credentials.",
        });
        return;
      }
  
      res.status(200).json({
        message: "User successfully created.",
        data: response,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle Zod validation errors
        res.status(400).json({
          message: "Validation failed.",
          errors: error.errors,
        });
      } else if (error.name === "TimeoutError") {
        // Handle a custom 408 Timeout error
        res.status(408).json({
          message: "Request timeout. Please try again later.",
        });
      } else {
        console.error("Signup error:", error);
        res.status(500).json({
          message: "Internal Server Error. Signup failed.",
        });
      }
    }
  };
  

exports.signinUser = async (req, res) => {
  try {
    const validateSignin = await userSigninSchema.parseAsync(req.body);

    const { email, password } = validateSignin;

    const response = await User.findOne({ email });
    if (response) {
      const isMatch = await bcrypt.compare(password, response.password);

      if (isMatch) {
        const token = jwt.sign({ id: response._id }, process.env.JWT_PASS);

        res.status(200).json({ 
          token: token,
          message: "You're logged in",
        });
      }
    } else {
      res.status(403).json({
        message: "Incorrect credentials",
      });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
        //handle zod validation error
        res.status(400).json({
          message: "Validation falied",
          errors: error.errors,
        });
      } else {
        console.log("Sign in error", error);
        res.status(500).json({
          message: "Signin failed",
        });
      }
  }
};
