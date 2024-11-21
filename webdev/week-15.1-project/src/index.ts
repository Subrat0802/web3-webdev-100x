import express from "express"
import jwt from "jsonwebtoken";
import { UserModel } from "./db";

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

let JWT_PASS = "subrat08"
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

app.post("api/v1/content", (req, res) => {
    
})

app.get("api/v1/content", (req, res) => {
    
})

app.delete("api/v1/content", (req, res) => {
    
})

app.get("api/v1/brain/:sharLink", (req, res) => {
    
})
const PORT = 3000;
app.listen(PORT);
console.log("app running at ", PORT)