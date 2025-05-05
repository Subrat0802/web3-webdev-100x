import express from "express";
import { PrismaClient } from "./generated/prisma";

const app = express();
const prismaCLient = new PrismaClient();

app.get("/", async (req, res) => {
    const user = await prismaCLient.user.findMany()
    res.json({
        message:"get request",
        user
    })
})

app.post("/", async (req, res) => {
    const user = await prismaCLient.user.create({
        data:{
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    res.json({
        message:"Post request",
        data:user
    })
})

app.listen(3000);