const express = require("express");
require("dotenv").config();
const cors = require("cors");
const database = require("./config/db");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/routerAuth");

const PORT = process.env.PORT || 4000;
const app = express();
database.connect();


app.use(express.json());
app.use(cookieParser());
app.use( 
    cors({
        origin:"http://localhost:5173",
        credentials:true,
    })
)

app.use("/api/v1/auth", userRouter)

app.listen(PORT, (req, res) => {
    console.log(`App is runnign at ${PORT} PORT`);
})