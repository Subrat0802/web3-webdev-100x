const express = require("express");
const { createCourse } = require("../controllers/course");
const { auth, isAdmin } = require("../middleware/user");
const router = express.Router();

router.post("/create", auth, isAdmin, createCourse);

module.exports = router;