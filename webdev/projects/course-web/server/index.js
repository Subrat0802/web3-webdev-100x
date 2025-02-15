const express = require("express");
const cookiParser = require("cookie-parser");
const authUser = require("./routes/authUser");
const courseRoute = require("./routes/courseRoute");
const profileRoute = require("./routes/profileRoute");
require("dotenv").config();
const {connect} = require("./config/db");


const app = express();
const PORT = process.env.PORT || 3001


app.use(express.json());
app.use(cookiParser());


app.use("/api/v1/userauth", authUser);
app.use("/api/v1/course", courseRoute)
app.use("/api/v1/profile", profileRoute);

connect();

app.listen(PORT, () => {
    console.log("App is running", PORT);
})