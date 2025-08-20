import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hi there docker file is started.");
})

app.post("/user", (req, res) => {
    const {username, password} = req.body;
})

app.listen(3000);
console.log("ENV VARIABLE", process.env.DATABASE_URL)