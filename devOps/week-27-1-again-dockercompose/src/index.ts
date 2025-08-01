import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prismaClient = new PrismaClient();

app.get("/", async (req, res) => {
  try {
    const userData = await prismaClient.userTest.findMany();

    if (!userData || userData.length === 0) {
      return res.json({
        message: "No users found",
        data: []
      });
    }

    res.json({
      message: "Users fetched successfully",
      data: userData
    });

  } catch (error) {
    console.error("Error in GET /:", error);
    res.status(500).json({
      message: "Internal Server Error"
    });
  }
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
