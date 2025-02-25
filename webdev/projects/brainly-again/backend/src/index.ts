import express from "express";
const app = express();
import mongoose from "mongoose";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";

const JWT_PASS = "123456"
app.use(express.json());


app.post("/api/v1/signup", async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        await UserModel.create({ username, password });

        res.status(200).json({
            message: "user is signup"
        })

    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }

})

app.post("/api/v1/signin", async (req: Request, res: Response): Promise<void> => {

    try {
        const { username, password } = req.body;
        const user = await UserModel.findOne({ username });;

        if (!user) {
            res.status(404).json({
                message: "user not present please sign up first"
            })
            return;
        }

        if (user?.password !== password) {
            res.status(404).json({
                message: "user not present please sign up first"
            })
            return;
        }

        const token = jwt.sign({
            id: user?._id,
            username: user?.username
        }, JWT_PASS)


        res.status(200).json({
            message: "user is signup",
            token: token,
            user: user
        })
    } catch (e) {
        res.status(404).json({
            message: "Invalid crdentials"
        });
        return;
    }

})

app.post("/api/v1/content", (req, res) => {

})

app.get("/api/v1/content", (req, res) => {

})

app.delete("/api/v1/content", (req, res) => {

})

app.post("/api/v1/brain/share", (req, res) => {

})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})


app.listen(3000);