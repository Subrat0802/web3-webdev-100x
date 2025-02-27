const Todo = require("../models/todo");

exports.createtodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    const response = await Todo.create({ title, description });

    res.status(200).json({
      success: true,
      data: response,
      message: "New Entery Created",
    });
  } catch (err) {
    res.status(403).json({
      message: "error",
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const response = await Todo.find({});
  
    res.json({
      data: response,
      success: true,
    });
  } catch (err) {
    res.status(403).json({
      message: "error",
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const response = await Todo.findByIdAndUpdate(
      id,
      { title, description, updatedAt: Date.now() },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "An error occurred while updating the todo",
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Todo.findOneAndDelete(id);
    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
