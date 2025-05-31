const OTP = require("../models/Otp");
const User = require("../models/User");
const otpGenrator = require("otp-generator");
const bcrypt = require("bcrypt");
const Profile = require("../models/Profile");
const jwt = require("jsonwebtoken");
require("dotenv").config();


//sendotp
exports.sendOTP = async (req, res) => {
  try {
    //fetch email from request body
    const { email } = req.body;

    //check user already exist
    const checkUserAlreadyExist = await User.findOne({ email });

    if (checkUserAlreadyExist) {
      return res.status(404).json({
        message: "User already exist",
        success: false,
      });
    }

    //generate otp
    var otp = otpGenrator.generate(6, {
      upperCaseAlphabets: fasle,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    console.log("OTP genrated", otp);

    const result = await OTP.findOne({ otp: otp });

    while (result) {
      otp = otpGenrator.generate(6, {
        upperCaseAlphabets: fasle,
        lowerCaseAlphabets: false,
        specialChars: false,
      });
      const result = await OTP.findOne({ otp: otp });
    }

    const otpPayload = { email, otp };
    //create an entery in db
    const otpBody = await OTP.create(otpPayload);
    console.log("otp addd in db", otpBody);

    //return res

    return res.status(200).json({
      success: true,
      message: `OTP sent successfully`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `server error while genrating OTP: ${error.message}`,
    });
  }
};

//signup
exports.signUp = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      contactNumber,
      otp,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !contactNumber ||
      !otp
    ) {
      return res.status(408).json({
        message: "All feld are required",
        success: false,
      });
    }

    if (password === confirmPassword) {
      return res.status(404).json({
        success: false,
        message:
          "Password and confirm password are not match, please try again.",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(408).json({
        message: "User is already exist, please try with different email.",
        success: false,
      });
    }

    //find most recent OTP stored for the user
    const recentOtp = await OTP.find({ email })
      .sort({ createdAt: -1 })
      .limit(1);
    console.log(recentOtp);

    //validate otp
    if (recentOtp.length == 0) {
      return res.status(408).json({
        message: "OTP not found, Please try again",
        success: false,
      });
    } else if (otp !== recentOtp) {
      return res.status(407).json({
        message: "Incorrect OTP, Please try again.",
        success: false,
      });
    }

    //hash pass
    const hashedPassword = await bcrypt.hash(password, 10);

    //create profile
    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: contactNumber,
    });

    //enetry create in db
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType,
      contactNumber,
      additionalDetails:profileDetails._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
    });


    return res.status(200).json({
        message:"User created successfully",
        data:user,
        success:true
    })
  } catch (error) {
    return res.status(500).json({
        message:"Server error while signup, please try again",
        success:false
    })
  }
};

//login
exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(403).json({
                message:"All fields are required.",
                success:false
            })
        }

        const existingUser = await User.findOne({email}).populate(additionalDetails);

        if(!existingUser){
            return res.status(409).json({
                message:"User does not exist, Please signup fisrt.",
                success:false
            })
        }

        const checkPassword = await bcrypt.compare(password, existingUser.password);

        if(!checkPassword){
            return res.status(408).json({
                message:"Password is incorrect, Please try again.",
                success:false
            })
        }

        const payload = {
            id: existingUser._id,
            accountType: existingUser.accountType,
            email: existingUser.email
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn:"24h"
        });

        existingUser.token = token;
        existingUser.password = undefined;

        const options = {
            expires: new Date(Date.now() + 3*24*60*60*1000),
            httpOnly:true
        }

        return res.cookie("token", token, options).status(200).json({
            success:true,
            token, 
            existingUser,
            message:"User logged in successfully."
        })

    }catch(error){
        return res.status(500).json({
            message:`Server error while signin: ${error.message}`,
            success:false
        })
    }
}


//changePassword
