const User = require("../models/user");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Profile = require("../models/profile");



const userSignUp = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(4),
  confirmPassword: z.string().min(4),
  accountType: z.string(),
});

exports.signup = async (req, res) => {
  try {
    
    const validateSignUp = await userSignUp.parseAsync(req.body);
    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
      accountType,
    } = validateSignUp;

    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
      res.status(409).json({
        message: "User already exist",
      });
      return;
    }

    if (password !== confirmPassword) {
      res.status(409).json({
        message: "Password does not match",
      });
      return;
    }


    
    const hashPassword = await bcrypt.hash(password, 10);

    const response = await User.create({
      firstname,
      lastname,
      email,
      password: hashPassword,
      confirmPassword: hashPassword,
      accountType,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstname}${lastname}`,
    });

    await Profile.create({
        gender:null,
        dateofbirth:null,
        about:null,
        contactNumber:null
    })

    if (!response) {
      return res.status(403).json({
        message: "Invalid Credentials",
      });
    }

    res.status(200).json({
      message: "User is created successfully",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(408).json({
        message: "Validation Error",
        errors: error.errors,
      });
    } else if (error.name === "TimeoutError") {
      res.status(404).json({
        message: "Request timeout. Please Try Again Later.",
      });
    } else {
      res.status(500).json({
        message: "Internal Server Error. Signup failed.",
      });
    }
  }
};

const userSignIn = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

exports.signin = async (req, res) => {
  try {
    const valiadteSignin = await userSignIn.parseAsync(req.body);
    const { email, password } = valiadteSignin;

    const response = await User.findOne({ email });
    if (!response) {
      res.status(402).json({
        message: "User is not registered with us. Please Signup first",
      });
      return;
    }
    const comparePassword = await bcrypt.compare(password, response.password);

    if (comparePassword) {
      const token = jwt.sign(
        {
          email: response.email,
          id: response._id,
          accountType: response.accountType,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );
      
      response.token = token;
      response.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 10000),
        httpOnly: true,
        secure: true,  // Required if using HTTPS
        sameSite: "none",  // Allows cross-site cookie saving
      };
      

      res.cookie("token", token, options).status(200).json({
        success: true,
        user: response,
        message: "User Login Success",
      });
    } else {
      res.status(401).json({
        message: "Wrong Password",
      });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        message: "Validation Error",
        errors: error.errors,
      });
    } else if (error.name === "TimeoutError") {
      res.status(404).json({
        message: "Request timeout. Please Try Again Later.",
      });
    } else {
      res.status(500).json({
        message: "Internal Server Error. Signup failed.",
      });
    }
  }
};
