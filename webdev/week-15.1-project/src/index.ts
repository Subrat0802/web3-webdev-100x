import express from "express"
import jwt from "jsonwebtoken";
import { contentModel, linkModel, UserModel } from "./db";
import { JWT_PASS } from "./confg";
import { userMiddleware } from "./middleware";
import { random } from "./utils";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());

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
        const {link, type, title} = req.body;
       
        const resposne = await contentModel.create({
            type,
            link,
            title,
            //@ts-ignore
            userId:req.userId,
            tags:[]
        })
    
        res.json({
            message:"Content added",
            // data:resposne
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

app.post("/api/v1/brain/share",userMiddleware, async (req, res) => {
    try{
        const {share} = req.body;
        const hash = random(10);
        if(share){

            const existingLink = await linkModel.findOne({
                //@ts-ignore
                userId:req.userId
            })
            if(existingLink){
                res.json({
                    hash:existingLink
                })
                return;
            }
            
            await linkModel.create({
                //@ts-ignore
                userId:req.userId,
                hash:hash
            })
        }else{
            await linkModel.deleteOne({
                //@ts-ignore
                userId:req.userid
            })
            res.json({
                message:"Remove link"
            })
            
        }
        res.json({
            message:"Updated sharable link",
            link:"http://localhost:3000/api/v1/brain/" + hash
        })
    }catch(err){
        res.json({
            message:"Server error"
        })
    }
})

app.get("/api/v1/brain/:sharLink",userMiddleware, async (req, res) => {
    try{
        const hash = req.params.sharLink;
        const link = await linkModel.findOne({
            hash: hash
        })
        if(!link){
            res.status(411).json({
                mesage:"Sorry incorrect input"
            })
            return;
        }

        const content = await contentModel.find({
            userId: link.userId
        })
        const user = await UserModel.findOne({
            _id:link.userId
        })
        if(!user){
            res.status(411).json({
                message:"user not found, error should idelly not happen"
            })
            return;
        }
        res.json({
            username:user.username,
            content:content
        })
    }catch(err){

    }
})
const PORT = 3000;
app.listen(PORT);
console.log("app running at ", PORT)


//http://localhost:3000/api/v1/brain/g5px3nejbl