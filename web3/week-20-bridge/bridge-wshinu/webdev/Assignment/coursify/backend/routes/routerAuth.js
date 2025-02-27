const express = require("express");
const { signup, signin } = require("../controllers/Auth");
const { createCourse, getCoursesCreatedByInstructor, deleteCourse, getAllCourses } = require("../controllers/course");
const { auth, isInstructor, isStudent } = require("../middleware/auth");
const router = express.Router()


router.post("/signup", signup);
router.post("/signin", signin);

router.post("/createcourse",auth, isInstructor, createCourse)

router.get("/courseCreatedByUser",auth, isInstructor,  getCoursesCreatedByInstructor)

router.delete("/deleteCourse", auth, isInstructor, deleteCourse)

router.get("/getAllCourses", auth, isStudent, getAllCourses);

module.exports = router