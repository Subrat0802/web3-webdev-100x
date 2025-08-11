import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.get("/getuser", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      message: "All users",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
});

app.post("/user", async (req, res) => {
  try {
    const createUser = await prisma.user.create({
      data: {
        email: Math.random().toString(),
        password: Math.random().toString(),
      },
    });

    res.status(200).json({
      data: createUser,
      message: "User created",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error,
    });
  }
});

app.listen(3000, () => {
  console.log("App is running at port 3000");
});
