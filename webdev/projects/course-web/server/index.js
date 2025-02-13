const express = require("express");

const app = express();

app.use(express.json());

app.use("/api/v1/user");
app.use("/api/v1/profile")

app.listen(3000, () => {
    console.log("App is running");
})