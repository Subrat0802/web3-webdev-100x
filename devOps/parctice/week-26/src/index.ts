import express from "express";
import { User } from "./db";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    const user = await User.find(); 
    res.status(200).json({
        users: user
    })
})

app.post("/signin", async (req, res) => {
    const {email, password} = req.body;
    const respo = await User.create({email, password});

    res.json({
        message:"User signin",
        data:respo
    })
})

app.listen(3000);