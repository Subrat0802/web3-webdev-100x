import express from "express";
import { UserModel } from "./dbconnect";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    const users = await UserModel.find();
  res.status(200).json({
    data:users
  })
});

app.post("/send", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.create({username, password});

    res.status(200).json({
        data:user,
        message:"user data"
    })
  } catch (error) {
    res.status(500).json({
        message:"Server error"
    })
  }
});

app.listen(3000);
