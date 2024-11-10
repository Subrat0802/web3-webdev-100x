const Todo = require("../models/todoModel");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, doneOrNot } = req.body;

    const response = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, doneOrNot: doneOrNot, updatedAt: Date.now() }
    );

    if (!response) {
      res.status(403).json({
        message: "Something went wrong while Updating Todo",
      });
      return;
    } else {
      res.status(200).json({
        message: "Todo is Updated successfully",
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
