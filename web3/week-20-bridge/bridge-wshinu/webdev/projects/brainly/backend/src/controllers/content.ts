import { userMiddleware } from "../middleware/userMiddleware";
import { contentModel } from "../models/content";
import { Request, Response } from "express";
import { userModel } from "../models/User";


export const content = async (req:Request, res:Response) => {
    try{
        const {title, type, link} = req.body;
        //@ts-ignore
        const id = req.userId;

        const checkUserExist = await userModel.findOne({_id:id});

        if(!checkUserExist){
            res.status(403).json({
                message:"User does not exist in our database"
            })
            return;
        }
        const response = await contentModel.create({
            title, 
            type, 
            link,
            userId:checkUserExist._id
        })

        res.status(200).json({
            message:"User content is created successfully",
            data:response
        })
    }catch(err){
        res.status(500).json({
            message:"Server error controller"
        })
    }
}


export const getContent = async (req:Request, res:Response) => {
    try{
        //@ts-ignore
        const id = req.userId;
        const response = await contentModel.find({userId:id});
        
        res.json({
            message:"All contents",
            data:response
        })
    }catch(err){
        res.json({
            message:"Server error"
        })
    }
}