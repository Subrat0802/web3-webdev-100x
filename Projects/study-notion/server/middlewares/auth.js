const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

//auth  
exports.auth = async = async (req, res, next) => {
    try{    
        //extract token 
        const token = req.cookie.token || req.body.token || req.header("Authorization").replace("Bearer ", "");

        //if token missing
        if(!token){
            return res.status(401).json({
                message:"Token is missing",
                success:false
            })
        }

        //verify token
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            
            req.user = decode;

            

        }catch(error){
            return res.status(400).json({
                message:"token is inavalid.",
                success:false
            })
        }

        next();

    }catch(error){
        return res.statsu(500).json({
            message:"Server error while validating token (auth)",
            success:false
        })
    }
}

//is Student
exports.isStudent = async (req, res, next) => {
    try{
        if(req.user.accountType !== "Student"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for students only."
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Server error, user role is not valid. Please try again"
        })
    }
}

//isInstructor
exports.isInstructor = async (req, res, next) => {
    try{
        if(req.user.accountType !== "Instructor"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Instructor only."
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Server error, user role is not valid. Please try again"
        })
    }
}

//isAdmin
exports.isAdmin = async (req, res, next) => {
    try{
        if(req.user.accountType !== "Admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Admin only."
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Server error, user role is not valid. Please try again"
        })
    }
}