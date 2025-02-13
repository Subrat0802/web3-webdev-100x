const express = require("express");
require("dotenv").config();
const {connect} = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3001


app.use(express.json());


// app.use("/api/v1/user");
// app.use("/api/v1/profile")
connect();

app.listen(PORT, () => {
    console.log("App is running");
})