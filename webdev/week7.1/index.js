const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "subrat08";
const { z } = require("zod");

mongoose.connect(
  "mongodb+srv://piyushsubrat8:tS3JGr5R50OYSLh0@cluster0.talyj.mongodb.net/todo-app-database"
);

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  try {
    const requiredbody = z.object({
      email: z.string().min(3).max(100).email(),
      username: z.string().min(3).max(100),
      password: z.string().min(3).max(100),
    });

    const parseDataWithSuccess = requiredbody.safeParse(req.body);
    if (!parseDataWithSuccess.success) {
      res.json({
        message: "Incorrect Format",
        error:parseDataWithSuccess.error
      });
      return;
    }

    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    const usersignupData = await UserModel.create({
      username,
      email,
      password: hashedPassword,
    });
    if (!usersignupData) {
      res.status(403).json({
        message: error.message,

      });
    } else {
      res.json({
        message: "You're signup",
        data: usersignupData,
      });
    }
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

app.post("/signin", async function (req, res) {
  try {
    const { email, password } = req.body;

    const response = await UserModel.findOne({ email });

    console.log(response);

    if (!response) {
      res.status(403).json({
        message: "user does not exist",
      });
    }
    const comparePassword = await bcrypt.compare(password, response.password);

    if (comparePassword) {
      const token = jwt.sign(
        {
          id: response._id.toString(),
        },
        JWT_SECRET
      );
      res.status(200).json({
        message: "You're logged in",
        token: token,
      });
    } else {
      res.json({
        message: "Password is incorrect",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.post("/todo", auth, async function (req, res) {
  const { title, done } = req.body;
  const userId = req.userId;
  const resp = await TodoModel.create({ title, done, userId });
  if (!resp) {
    res.json({
      message: "something went wrong",
    });
  } else {
    res.json({
      message: "Todo is created",
      data: resp,
    });
  }
});

app.get("/todos", auth, async function (req, res) {
  const resp = await TodoModel.find();
  if (!resp) {
    res.json({
      message: "no response ",
    });
  } else {
    res.json({
      data: resp,
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;

  const decode = jwt.verify(token, JWT_SECRET);

  if (decode) {
    req.userId = decode.id;
    next();
  } else {
    res.json({
      message: "not a user",
    });
    return;
  }
}

app.listen(3000);
