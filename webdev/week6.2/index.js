const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "subrat08"
const app = express();
app.use(express.json());

const users = [];

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup", function(req, res){
    const {username, password} = req.body;

    const usercheck = users.find((e) => e.username === username)

    if(usercheck){
        res.json({
            message:"user is already exist"
        })
        return
    }
    else{
        users.push({
            username,
            password
        })
        res.json({
            message:"You're signed up"
        })
    }    
})

app.post("/signin", function(req, res){
    const {username, password} = req.body;
    const userchecktwo = users.find((e) => e.username === username && e.password === password)
    if(userchecktwo){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            message:"you are logged in",
            token:token
        })
    }
    else{
        res.json({
            message:"user is not exist"
        })
        return
    }  
})

function auth(req, res, next){
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_SECRET);
    
    const checkuser = users.find((e) => e.username === decoded.username)

    if(checkuser){
        req.username = checkuser.username,
        req.token = token
        next();
    }
    res.json({
        message:"Invalid token",
        token:token
    })
}

app.get("/me", auth, function(req, res){

    const findUser = users.find((e) => e.username === req.username)

    if(findUser){
        res.json({
            message:"hit the me router yes you are our customer",
            name:findUser.username,
            password:findUser.password,
            token:req.token
        })
    }
    else{
        res.json({
            message:"Youre not our customer"
        })
    }
})





app.listen(3000);