const jwt = require("jsonwebtoken");

function adminMiddleware(req, res, next){
    const token = req.headers.token;
    console.log("token", token)
    const decode = jwt.verify(token, process.env.jwtadminPassword);
    console.log("id", decode.id);
    if(decode){
        req.userId = decode.id.toString();
        next();
    }else{
        res.status(403).json({
            message:"You are not signed in"
        })
    }
}

module.exports = {adminMiddleware};