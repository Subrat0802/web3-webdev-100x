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
    const response = await prismaClient.user.create({
      data: {
        email: parseData.data?.username,
        //todo hash the password
        password: parseData.data?.password,
        name: parseData.data?.name,
      },
    });
    res.json({
      response: response,
    });
  } catch (error) {
    res.status(411).json({
      message: "user is already exist",
    });
  }
});

app.post("/signin", async (req, res) => {
  const data = await SignInSchema.safeParse(req.body);

  if (!data.success) {
    res.json({
      message: "Incorrect Inputs",
    });
    return;
  }
  //TODO compare the hash password
  const user = await prismaClient.user.findFirst({
    where: {
      email: data.data.username,
      password: data.data.password,
    },
  });

  if (!user) {
    res.status(403).json({
      message: "Not authorized, signup first",
    });
    return;
  }
  const userId = 1;
  const token = jwt.sign(
    {
      userId: user?.id,
    },
    JWT_SECRET
  );

  res.status(200).json({
    token: token,
    response: user,
  });
});

app.post("/room", middleware, async (req, res) => {
  const data = CreateRoomSchema.safeParse(req.body);
  if (!data.success) {
    res.json({
      message: "Incorrect Inputs",
    });
    return;
  }
  //@ts-ignore
  const userId = req.userId;

  try {
    const response = await prismaClient.room.create({
      data: {
        slug: data.data.name,
        adminId: userId,
      },
    });

    res.json({
      response: response.id,
    });
  } catch (error) {
    res.status(411).json({
      mesage: "Error while creating new room",
      error,
    });
  }
});

app.get("/chats/:roomId", async (req, res) => {
  try{
    const roomId = Number(req.params.roomId);
    console.log(req.params.roomId);
    const messages = await prismaClient.chat.findMany({
      where: {
        roomId: roomId,
      },
      orderBy: {
        id: "desc",
      },
      take: 50,
    });
  
    res.json({
      messages,
    });
  }catch(error){
    console.log(error);
    res.json({
      error
    })
  }
  
});

app.get("/room/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const room = await prismaClient.room.findFirst({
      where: {
        slug,
      },
    });

    res.json({
      room,
    });
  } catch (e) {
    res.json({
      message:"Error",
      e
    })
  }
});

app.listen(3001);
