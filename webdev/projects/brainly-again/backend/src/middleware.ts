import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASS } from "./confg";

export const userMiddleware = (req: Request, res: Response, next:NextFunction) => {
    try{
        const header = req.headers["authorization"];
        const decode = jwt.verify(header as string, JWT_PASS)
        if(decode){
            // @ts-ignore
            req.userId = decode.id
            next()
        }else{
            res.json({
                message:"You are not logged in"
            })
        }
    }catch(err){
        res.json({
            message:"Middleware wrong credential"
        })
    }
}

