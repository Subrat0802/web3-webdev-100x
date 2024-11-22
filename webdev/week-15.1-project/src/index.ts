import express from "express"
import jwt from "jsonwebtoken";
import { contentModel, UserModel } from "./db";
import { JWT_PASS } from "./confg";
import { userMiddleware } from "./middleware";

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
    try{
        const {username, password} = req.body;
        await UserModel.create({username, password});
    
        res.json({
            message:"User signed up"
        })
    }catch(err){
        console.log(err, "error")
        res.json({
            message:"User already exist"
        })
    }
    
})


app.post("/api/v1/signin",async (req, res) => {
    const {username, password} = req.body;
    const existingUser = await UserModel.findOne({username, password});

    if(existingUser){
        const token = jwt.sign({
            id:existingUser._id
        }, JWT_PASS)

        res.json({
            token:token,
            message:"User signin"
        })
    }else{
        res.json({
            message:"Incorrect Credentials"
        })
    }
})

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    try{
        const {link, type} = req.body;
        contentModel.create({
            type,
            link,
            //@ts-ignore
            userId:req.userId,
            tags:[]
        })
    
        res.json({
            message:"Content added"
        })
    }catch(err){
        res.json({
            message:"invalid credential server error"
        })
    }
    
})

app.get("/api/v1/content",userMiddleware, async (req, res) => {
    try{
        //@ts-ignore
        const userId = req.userId
        const content = await contentModel.find({userId: userId}).populate("userId", "username")
        
        res.json({
            message:"User content",
            data:content
        })
    }catch(err){
        res.json({
            message:"Invalid while fetching all content"
        })
    }
})

app.delete("/api/v1/content",userMiddleware, async (req, res) => {
    try{
        const {contentId} = req.body;
        //@ts-ignore
        const userId = req.userId;
        const response = await contentModel.findOneAndDelete({_id:contentId, userId:userId});
        res.json({
            message:"COntent Deleted successfully",
            deletedContent:response
        })
    }catch(err){
        res.json({
            message:"Invalid server error"
        })
    }
})

app.get("api/v1/brain/:sharLink", (req, res) => {
    
})
const PORT = 3000;
app.listen(PORT);
console.log("app running at ", PORT)