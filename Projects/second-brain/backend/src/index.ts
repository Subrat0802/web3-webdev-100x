import express from "express";
import * as dotenv from "dotenv";
import { userSigninZodValidation, userZodvalidation } from "./utils";
import { userModel } from "./db";
import bcrypt from "bcrypt";
import { ZodError } from "zod";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;


app.post("/api/v1/signup", async (req, res) => {
    try{
        console.log("username", req.body);
        const zodeAuthValidation = await userZodvalidation.parseAsync(req.body);
        
        const { username, email, password } = zodeAuthValidation;
        

        const checkEmail = await userModel.findOne({email:email});
        
        if(checkEmail) {
            res.status(409).json({
                message:"Email is already present, typy with different email address"
            })
            return;
        }

        const passwordHashed = await bcrypt.hash(password, 10);

        const response = await userModel.create({email, password:passwordHashed, username});
        if(!response) {
            res.status(408).json({
                messgae:"Error while signup, new user"
            })
            return;
        }
        res.status(200).json({
            message:"User is successfully created"
        })

    }catch(error){
        if(error instanceof ZodError){
            res.status(404).json({
                message:"validation error",
                error:error.errors
            })
        }else{
            res.status(500).json({
                message:"Internal server error"
            })
        }
    }
})

app.post("/api/v1/signin", async (req, res) => {
    try{
        const zodvalidation = await userSigninZodValidation.parseAsync(req.body);
        const {email, password} = zodvalidation;

        const existingUser = await userModel.findOne({email});
        if(!existingUser) {
            res.status(404).json({
                message:"user is not present, please signup first with this email"
            })
            return;
        }
        const matchpassword = await bcrypt.compare(password, existingUser?.password);

        if(!matchpassword){
            res.status(409).json({
                message:"Password is incorrect"
            })
            return;
        }

        const option = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 *1000 ),
            httpOnly: true
        }

        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is not defined in environment variables.");
        }

        const token = jwt.sign({
            id: existingUser._id,
            email: existingUser.email
        }, process.env.JWT_SECRET,{
            expiresIn: "72h"
        });

        res.cookie("token", token, option).status(200).json({
            message:"User signin successfully",
            token: token,
            user: existingUser
        })

    }catch(error){
        if(error instanceof ZodError){
            res.status(404).json({
                message:"validation error",
                error:error.errors
            })
        }else{
            res.status(500).json({
                message:"Internal server error"
            })
        }
    }
})

app.post("/api/v1/content", (req, res) => {
    try{
        
    }catch(error){
        
    }
})

app.get("/api/v1/content", (req, res) => {
    try{

    }catch(error){
        
    }
})

app.delete("/api/v1/content", (req, res) => {
    try{

    }catch(error){
        
    }
})

app.post("/api/v1/brain/share", (req, res) => {
    try{

    }catch(error){
        
    }
})

app.post("/api/v1/brain/:shareLink", (req, res) => {
    try{

    }catch(error){
        
    }
})

app.listen(PORT, () => {
    console.log("App is running at port", PORT)
});
