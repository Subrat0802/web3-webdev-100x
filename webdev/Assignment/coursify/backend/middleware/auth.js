const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
    try {
        let token = req.cookies.token || req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing"
            });
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;  // ✅ Store decoded token into req.user

        next();
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Token has expired, please log in again"
            });
        }
        return res.status(500).json({
            success: false,
            message: "Invalid token, something went wrong"
        });
    }
};

exports.isStudent = async (req, res, next) => {
    try {
        if (!req.user || req.user.accountType !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for students only"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again"
        });
    }
};

exports.isInstructor = async (req, res, next) => {
    try {
        if (!req.user || req.user.accountType !== "Instructor") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Instructor only"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again"
        });
    }
};

exports.isAdmin = async (req, res, next) => {
    try {
        if (!req.user || req.user.accountType !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Admin only"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User role cannot be verified, please try again"
        });
    }
};
