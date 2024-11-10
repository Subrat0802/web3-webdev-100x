const Todo = require("../models/todoModel");

exports.createTodo = async (req, res) => {
  try {
    const { title, description, doneOrNot } = req.body;
    const response = await Todo.create({
      title: title,
      description: description,
      doneOrNot: doneOrNot,
    });

    if (!response) {
      res.status(403).json({
        message: "Something went wrong while creating Todo",
      });
      return;
    } else {
      res.status(200).json({
        message: "Todo is created successfully",
        data: response,
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
