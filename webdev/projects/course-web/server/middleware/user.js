const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
    try{
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");

        if(!token){
            return res.status(400).json({
                success:false,
                message:"Token is missing"
            })
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decode;
        
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"token is invalid",
        })
    }
}

exports.isStudent = async (req, res, next) => {
    try{
        const {accountType} = req.user;

        if(accountType !== "Student"){
            return res.status(400).json({
                message:"This is protected route for Students only"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"token is invalid",
        })
    }
}

exports.isAdmin = async (req, res, next) => {
    try{
        const {accountType} = req.user;

        if(accountType !== "Admin"){
            return res.status(400).json({
                message:"This is protected route for Admin only"
            })
        }
        next();
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"token is invalid",
        })
    }
}