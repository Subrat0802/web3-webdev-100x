import jwt, { decode, verify } from "jsonwebtoken";
import {JWT_SECRET} from "@repo/backend-common/config"
import { NextFunction, Response, Request } from "express";

export function middleware(req:Request, res:Response, next:NextFunction){
    //@ts-ignore
    const token = req.headers["authorization"] ?? "";
    const decoded = jwt.verify(token, JWT_SECRET);

    if(decoded) {
        //@ts-ignore
        req.userId = decoded.userId;
        next();
    }else{
        res.status(403).json({
            message:"Unauthorized"
        })
    }

}