const Todo = require("../models/todoModel");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({});
    if (!todos) {
      res.status(403).json({
        success: false,
        message: "No Todo found bad request",
      });
      return;
    } else {
      res.status(200).json({
        message: "Get al todos",
        data: todos,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      messagae: "Server Error",
    });
  }
};
