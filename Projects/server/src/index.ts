import express from "express";
import { userSigninValidation, UserValidation } from "./zodvalidation";
import { userModel } from "./db";
import bcrypt from "bcrypt";
import { ZodError } from "zod";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors()); 

app.post("/signup", async (req, res) => {
  try {
    const validation = await UserValidation.parseAsync(req.body);
    const { email, username, password, confirmPassword } = validation;

    if (password !== confirmPassword) {
      res.status(411).json({
        message: "Password and confirm password are not same",
      });
      return;
    }

    const pass = await bcrypt.hash(password, 10);

    const checkUser = await userModel.findOne({ email });

    if (checkUser) {
      res.status(411).json({
        message: "user already exist, try another email",
      });
      return;
    }

    const response = await userModel.create({
      email,
      username,
      password: pass,
    });

    res.status(200).json({
      message: "User is signup siccessfully",
      response: response,
    });
  } catch (error: any) {
    if (error instanceof ZodError) {
      res.status(404).json({
        message: "Validation Error",
        error: error.errors,
      });
    } else {
      res.status(500).json({
        message: "Internal server error, try again after sometime",
        error: error?.errors,
      });
    }
  }
});

app.post("/signin", async (req, res) => {
  try {
    const validation = await userSigninValidation.parseAsync(req.body);
    const { email, password } = validation;

    const checkuser = await userModel.findOne({ email });

    if (!checkuser) {
      res.status(411).json({
        message: "User is not preset please, signup first",
      });
      return;
    }
    if (!checkuser?.password) {
      res.status(400).json({
        message: "Invalid credentials",
      });
      return;
    }

    const matchPass = await bcrypt.compare(password, checkuser.password);

    if (!matchPass) {
      res.status(411).json({
        message: "Password is incorrect",
      });
      return;
    }

    const JWT_SECRET = process.env.JWT_SECRET_KEY;


    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in the environment variables");
    }

    const token = await jwt.sign(
      {
        userId: checkuser._id,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    checkuser.password = undefined;

    res.status(200).json({
        message:"user is signin",
        response:checkuser,
        token:token
    })
  } catch (error) {
    if(error instanceof ZodError){
        res.status(409).json({
            message:"Validation error",
            error:error.errors
        })
    }else{
        res.status(500).json({
            message:"internal server error"
        })
    }
  }
});


const SWIGGY_API_URL = process.env.SWIGGY_API || "";

app.get("/api/restaurants", async (req, res) => {
    try {
        const response = await axios.get(SWIGGY_API_URL, {
            headers: { "User-Agent": "Mozilla/5.0" } 
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(3000, () => {
  console.log("app is runnig at port number 3000");
});
