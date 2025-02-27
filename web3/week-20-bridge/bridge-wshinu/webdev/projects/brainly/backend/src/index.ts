import express from "express";
import router from "./routes/route";
import mongoose from "mongoose";
import cookieParser from "cookie-parser"
import { DB } from "./config";

const app = express();
app.use(express.json());
app.use(cookieParser());
require("dotenv").config();
const PORT = process.env.PORT || 3000

app.use("/api/v1", router)

mongoose.connect(DB)

app.listen(PORT, () => {
    console.log(`App is running at port number ${PORT}`);
})



