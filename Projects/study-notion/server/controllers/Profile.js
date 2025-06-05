const Profile = require("../controllers/Profile");
const User = require("../controllers/User");

exports.updateProfiiel = async (req, res) => {
  try {
    const { id } = req.user;
    const { dateOfBirth = "", about = "", contactNumber, gender } = req.body;

    //validation
    if (!contactNumber || !gender || !id) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //find profile
    const userDetails = await User.findById(id);
    const profileId = userDetails.additionalDetails;
    const profileDetails = await Profile.findByIdAndUpdate(
      { profileId },
      {
        dateOfBirth,
        about,
        contactNumber,
        gender,
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Profile updated successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while updating profile tags",
      error: error.message,
      success: false,
    });
  }
};

//delte account

exports.deleteAccount = async (req, res) => {
  try {
    //get id
    const { id } = req.user;
    //validation
    const userDetails = await User.findById(id);
    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    //delet profile
    await Profile.findByAndDelete({ _id: userDetails.additionalDetails });
    //delete user
    await User.findByAndDelete({ _id: id });
    //return res
    return res.status(200).json({
      message: "user deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while deleting user profile tags",
      error: error.message,
      success: false,
    });
  }
};

//export

exports.getAllUserDetails = async (req, res) => {
  try {
    const id = req.user.id;

    const userDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();

    return res.status(200).json({
      message: "user details fetched successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while deleting user profile tags",
      error: error.message,
      success: false,
    });
  }
};
