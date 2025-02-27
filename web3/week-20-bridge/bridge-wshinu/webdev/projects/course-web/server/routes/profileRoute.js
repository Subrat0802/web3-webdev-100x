const express = require("express");
const { auth } = require("../middleware/user");
const { addProfileInfo } = require("../controllers/profile");
const router = express.Router();

router.post("/addProfileDetails", auth, addProfileInfo);

module.exports = router;