const express = require("express");
const { createCourse, getAllCourses, courseCreatedByInstructor } = require("../controllers/course");
const { auth, isAdmin, isInstructor } = require("../middleware/user");
const router = express.Router();

router.post("/create", auth, isInstructor, createCourse);
router.get("/allCourses", auth, getAllCourses);
router.get("/courseByInstructor", auth, isInstructor, courseCreatedByInstructor);

module.exports = router;