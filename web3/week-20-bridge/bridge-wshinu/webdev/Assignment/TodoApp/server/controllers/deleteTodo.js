const Todo = require("../models/todoModel");

exports.deleteTodo = async (req, res) => {
  try {
    const {id} = req.params;

    const response = await Todo.findByIdAndDelete(id);
    if (!response) {
        res.status(403).json({
          message: "Something went wrong while deleting Todo",
        });
        return;
      } else {
        res.status(200).json({
          message: "Todo is deleted successfully",
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
