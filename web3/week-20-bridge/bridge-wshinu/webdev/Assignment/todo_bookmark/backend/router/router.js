const express = require("express");
const { createtodo, getTodo, updateTodo, deleteTodo } = require("../controllers/crateTodo");
const { signupUser, signinUser } = require("../controllers/createUser");
const router = express.Router();


router.post("/createtodo", createtodo);
router.get("/gettodos", getTodo);
router.put("/updatetodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

router.post("/signup", signupUser);
router.post("/signin", signinUser)


module.exports = router;