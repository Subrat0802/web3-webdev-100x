const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { dbConnect } = require("./config/db/database");
const UserRouter = require("./routes/User");
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 4000;

dbConnect();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true               
}));

app.use("/api/v1/", UserRouter);

app.listen(PORT, () => {
    console.log(`App running on port number ${PORT}`)
})