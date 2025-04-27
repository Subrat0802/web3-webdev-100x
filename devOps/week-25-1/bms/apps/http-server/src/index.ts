import express from "express";
import {client} from "@repo/db/client";


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hi there");
})

app.post("/signup", async (req, res) => {
    const {username, password} = req.body;
    const createUser = await client.user.create({
        data:{
            username:username,
            password:password
        }
    })
    
    res.status(200).json({
        message:"User is created successfully",
        id: createUser.id
    })
})

app.listen(3002);