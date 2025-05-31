const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");

//generate token and send link to mail, to reset password
exports.resetPasswordToken = async (req, res) => {
  try {
    //get email from req body
    const email = req.body.email;
    //check user in db
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(408).json({
        message: "You email is not registered with us.",
        success: false,
      });
    }

    //generate token
    const token = crypto.randomUUID();

    //add this token to user
    const updateDetails = await User.findOneAndUpdate(
      { email: email },
      { token: token, resetPasswordExpires: Date.now() + 5 * 60 * 1000 },
      { new: true }
    );

    //create url
    const url = `http://localhost:3000/update-pasword/${token}`;

    //send mail containing the url
    await mailSender(
      email,
      "Password Reset Link",
      `Password reset link ${url}`
    );

    return res.status(200).json({
      success: true,
      message: "Password reset link sent, check your email.",
    });
  } catch (error) {
    return res.status(500).json({
      message: `Server error while sending reset password mail. ${error.message}`,
      success: false,
    });
  }
};

//reset password using mail link
exports.resetPassword = async (req, res) => {
  try {
    //fetch data
    const { password, confirmPassword, token } = req.body;
    //validation
    if (password !== confirmPassword) {
      return res.status(408).json({
        message: "Password or confirm password is matching, Please try again.",
        success: false,
      });
    }

    //get user details
    const userDetails = await User.findOne({ token: token });
    //if no entery - invalid token
    if (!userDetails) {
      return res.status(404).json({
        message: "Token is invalid",
        success: false,
      });
    }
    //token time check
    if (userDetails.resetPasswordExpires < Date.now()) {
      return res.status(409).json({
        success: false,
        message: "Token is expired, please regenrate your token.",
      });
    }

    //hash password
    const newHashedPassword = await bcrypt.hash(password, 10);
    //update user data with new password;
    const updatePasswordUser = await User.findOne(
      { email: userDetails.email },
      { password: newHashedPassword },
      { new: true }
    );

    return res.status(200).json({
        message:"Password reset successfully",
        success:true
    })
  } catch (error) {
    return res.status(500).json({
      message: `Server error while reseting password. ${error.message}`,
      success: false,
    });
  }
};
