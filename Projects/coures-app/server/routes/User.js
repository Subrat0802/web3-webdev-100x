const express = require("express");
const { signin, signup } = require("../controllers/auth");
const { middleware, isInstructor } = require("../middleware/middlewareauth");
const { createCourse } = require("../controllers/course");
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

router.post("/createcourse", middleware, isInstructor, createCourse);

module.exports = router;
