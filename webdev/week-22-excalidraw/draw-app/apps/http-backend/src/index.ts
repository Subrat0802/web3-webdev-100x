import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { CreateUserSchema, signinSchema, CreateroomSchema } from "@repo/common/types";

const app = express();

app.post("/signup", (req, res) => {
    const data = CreateUserSchema.safeParse(req.body);

    if(!data){
        res.json({
            message:"Incorrect inputs"
        })
        return;
    }

})

app.post("/signin", (req, res) => {
    const data = signinSchema.safeParse(req.body);

    if(!data){
        res.json({
            message:"Invalid credentials"
        })
    }

    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room", middleware, (req, res) => {

    const data = CreateroomSchema.safeParse(req.body);

    if(!data){
        res.json({
            message:"Invalid credentials"
        })
    }

    res.json({
        roomId:123
    })
})  



app.listen(3001);