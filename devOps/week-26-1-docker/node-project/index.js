const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello world  vvdsfvdsv");
})

app.listen(3000);

console.log("process.env.DATABASE_URL");
console.log(process.env.DATABASE_URL);