import { PrismaClient } from "@prisma/client"
import express from "express"

const app = express()
const prismaClient = new PrismaClient();

app.get("/", async (req, res) => {
    const user = await prismaClient.user.findMany()
    res.json({
        message: "get request",
        user
    })
})

app.post("/", async (req, res) => {
    const user = await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    res.json({
        message: "Post request",
        data: user
    })
})

app.listen(3000);
