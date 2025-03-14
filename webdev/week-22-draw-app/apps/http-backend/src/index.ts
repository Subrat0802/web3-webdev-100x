import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import {
  CreateUserSchema,
  SignInSchema,
  CreateRoomSchema,
} from "@repo/common/types";
import { prismaClient } from "@repo/db/client";

const app = express();

app.use(express.json());

app.post("/signup", async (req: Request, res: Response) => {
  const parseData = CreateUserSchema.safeParse(req.body);
  if (!parseData.success) {
    res.json({
      message: "Incorrect Inputs",
    });
    return;
  }
  try {
    await prismaClient.user.create({
      data: {
        email: parseData.data?.username,
        password: parseData.data?.password,
        name: parseData.data?.name,
      },
    });
    res.json({
      userId: 123,
    });
  } catch (error) {
    res.status(411).json({
        message:"user is already exist"
    })
  }
});

app.post("/signin", (req, res) => {
  const data = SignInSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect Inputs",
    });
    return;
  }
  const userId = 1;
  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  res.json({
    token,
  });
});

app.post("/room", middleware, (req, res) => {
  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect Inputs",
    });
    return;
  }
  res.json({
    roomId: 123,
  });
});

app.listen(3001);
