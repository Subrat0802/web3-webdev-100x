const express = require("express");
const { createTodo } = require("../controllers/createTodo");
const { getTodos } = require("../controllers/getTodos");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");
const router = express.Router();


router.post("/createTodo", createTodo);
router.get("/getAllTodo", getTodos);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;