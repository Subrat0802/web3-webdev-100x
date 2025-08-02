import { prismaCLient } from "db/client";
import express from "express";

const app = express();
const prismaClient = prismaCLient;

app.use(express.json());

app.get("/", async (req, res) => {
    const userData = await prismaClient.user.findMany();
    res.json({
        data:userData,
        message:"find first user"
    })
})

app.post("/", async (req, res) => {
    const {username, password} = req.body;
    const userData = await prismaClient.user.create({
        data:{
            username,
            password
        }
    })
    res.json({
        data:userData,
        message:"User created"
    })
})

app.listen(3000)