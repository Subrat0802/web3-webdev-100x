require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.middleware = async (req, res, next) => {
    try{
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");

        if(!token){
            return res.status(400).json({
                success:false, 
                message:"Token is missing"
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;

        next();

    }catch(error){
        return res.status(500).json({
            message:"Server error"
        })
    }
}

exports.isStudent = (req, res, next) => {
    try{
        const {accountType} = req.user;
        if(!accountType === "Student"){
            return res.status(404).json({
                message:"this is protected route for students"
            })
        }
        next();
    }catch(erorr){
        return res.status(500).json({
            message:"Server error while validating student token"
        })
    }
}

exports.isInstructor = (req, res, next) => {
    try{
        const {accountType} = req.user;
        if(!accountType === "Instructor"){
            return res.status(404).json({
                message:"this is protected route for Instructor"
            })
        }
        next();
    }catch(erorr){
        return res.status(500).json({
            message:"Server error while validating Instructor token"
        })
    }
}