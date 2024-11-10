const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");

app.use(cors());
const PORT = process.env.PORT || 4000;

const todoRoutes = require("./routes/todosRoute");
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server started at port number ${PORT}`)
});

const connection = require("./config/database");
connection();
