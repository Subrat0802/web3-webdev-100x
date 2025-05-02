const mongoose = require("mongoose");
const user = require("../models/user");
const bcrypt = require("bcrypt")

exports.signup = async(req, res) => {
    try{
        const {firstName, lastName, email, password, confirmPassword, accountType} = req.body;
        if (!firstName || !lastName || !email || !password || !confirmPassword || !accountType) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        if(password !== confirmPassword){
            return res.status(405).json({
                message:"Password and confirm does not match.",
                success:false
            })
        }
        const checkExistingUser = await user.findOne({email:email});
        if(checkExistingUser){
            return res.status(404).json({
                success:false,
                message:"user already exist. please try again with different account."
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const createUser = await user.create({
            firstName, lastName, email, password: hashedPassword, accountType
        })
        return res.status(200).json({
            success:true,
            message:"user account is created, signup successfull.",
            data:createUser
        })
    }catch(error){
        return res.status(500).json({
            message:"Internal Server error.",
            success:false
        })
    }
}


exports.signin = async(req, res) => {
    try{
        const {email, password} = req.body;
        if(!email && !password){
            return res.status(404).json({
                message:"All fields are required.",
                success:false
            })
        }

        const checkExistingUser = await user.findOne({email:email});

        if(!checkExistingUser){
            return res.status(404).json({
                message:"user with this email not exist. please use right email address.",
                success:false
            })
        }

        const comparePassword = bcrypt.compare(password, checkExistingUser.password);

        if(!comparePassword){
            return res.status(408).json({
                message:"incorrect password.",
                success:false
            })
        }

        return res.status(200).json({
            message:"user is signin successfully",
            success:true
        })


    }catch(error){
        return res.status(500).json({
            message:"Internal server error."
        })
    }
}