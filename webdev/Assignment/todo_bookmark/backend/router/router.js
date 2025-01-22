const express = require("express");
const { createtodo, getTodo, updateTodo, deleteTodo } = require("../controllers/crateTodo");
const router = express.Router();


router.post("/createtodo", createtodo);
router.get("/gettodos", getTodo);
router.put("/updatetodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;