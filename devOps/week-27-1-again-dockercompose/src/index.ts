import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prismaClient = new PrismaClient();

app.get("/", async (req, res) => {
  const userData = prismaClient.userTest.findMany();

  if(!userData){
    return res.send({
        message:"User does not found"
    })
  }
  res.send(`Hi there get endpoint findmany data:  ${userData}`);
  
  res.json({
    message: "Get endpoint",
    data: userData
  });
});

app.post("/signup", async (req, res) => {
  const userData = await prismaClient.userTest.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  res.json({
    message: "post endpoint user created",
    data: userData
  });
});

app.listen(3000);
