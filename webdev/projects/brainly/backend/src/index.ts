import express from "express";
import router from "./routes/route";
import mongoose from "mongoose";
import cookieParser from "cookie-parser"

const app = express();
app.use(express.json());
app.use(cookieParser());
require("dotenv").config();
const PORT = process.env.PORT || 3000

app.use("/api/v1", router)

mongoose.connect("mongodb+srv://piyushsubrat8:tS3JGr5R50OYSLh0@cluster0.talyj.mongodb.net/project-brainly")

app.listen(PORT, () => {
    console.log(`App is running at port number ${PORT}`);
})



