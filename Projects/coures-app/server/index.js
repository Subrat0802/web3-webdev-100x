const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { dbConnect } = require("./config/db/database");
const UserROuter = require("./routes/User");

dotenv.config();
const PORT = process.env.PORT || 4000;

dbConnect();

app.use(express.json());

app.use("/api/v1/", UserROuter);

app.listen(PORT, () => {
    console.log(`App running on port number ${PORT}`)
})