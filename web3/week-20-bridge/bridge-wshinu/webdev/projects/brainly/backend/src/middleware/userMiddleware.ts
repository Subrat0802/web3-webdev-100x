import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { jWT_PASS } from "../config";

export const userMiddleware = (req:Request, res:Response, next:NextFunction) => {
    try{
        const header = req.headers["authorization"] || req.cookies.kill;

        if(!header){
            res.status(401).json({
                message:"Authorization header not found. Please log in."
            })
        }
        const decode = jwt.verify(header as string, jWT_PASS)
        if(decode){
            //@ts-ignore
            req.userId = decode.id
            next();
        }
        else{
            res.json({
                message:"You're not logged in"
                
            })
        }
    }catch(err){
        console.error("Middleware error:", err);
        res.status(401).json({
            message: "Invalid or expired token. Please log in again.",
        });
    }
}