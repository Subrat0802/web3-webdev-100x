import { Request, Response } from "express";
import { userModel } from "../models/User";
import { z, ZodError } from "zod"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { jWT_PASS } from "../config";



const userSignupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    username: z.string().min(3),
    confirmPassword: z.string().min(6),
});


const userSigninSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const signup = async (req: Request, res: Response) => {
    try {
        const validatedData = await userSignupSchema.parseAsync(req.body);

        const { username, email, password, confirmPassword } = validatedData;

        if (password !== confirmPassword) {
            res.status(400).json({
                message: "Password and confirm password do not match",
            });
            return;
        }

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            res.status(411).json({
                message: "user already exist, try with different email"
            })
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const response = await userModel.create({
            username,
            email,
            password: hashedPassword,
        })

        if (!response) {
            res.status(411).json({
                message: "Something went wrong while adding data to DB"
            })
            return;
        }

        res.status(200).json({
            message: "user added to DB",
            data: response
        })
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({
                message: "Validation failed",
                errors: error.errors,
            });
            return;
        } else {
            res.status(500).json({
                message: "Signup failed, server error",
            });
        }
    }
}



export const signin = async (req: Request, res: Response) => {
    try {
        const validateData = await userSigninSchema.parseAsync(req.body);
        const { email, password } = validateData;
        const userExist = await userModel.findOne({ email });

        if (!userExist) {
            res.status(403).json({
                message: "User does not exist"
            })
            return;
        }

        const matchPassword = await bcrypt.compare(password, userExist.password);

        if (!matchPassword) {
            res.status(403).json({
                message: "Incorrect Password"
            })
            return;
        }
        const token = jwt.sign({ id: userExist._id }, jWT_PASS)

        const options ={
            expires: new Date(Date.now() + 100000),  //3 * 24 * 60 * 60 * 1000
            httpOnly:true
        }

        res.cookie("kill", token, options).status(200).json({
            message: "User log in successfully",
            token: token
        })
    } catch (err) {
        if (err instanceof z.ZodError) {
            res.status(400).json({
                message: "Validation Failed",
                errors: err.errors
            })
        } else {
            res.status(500).json({
                message: "Internal server error"
            })
        }
    }
}