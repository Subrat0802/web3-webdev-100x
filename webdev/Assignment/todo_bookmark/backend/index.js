const express = require("express");
const app = express();
const cors = require("cors")

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

const todoRoutes = require("./router/router");
app.use("/api/v1", todoRoutes);

const dbconnect = require("./config/db");
dbconnect();

app.listen(PORT, () => {
    console.log(`App running at PORT ${PORT}`)
})


