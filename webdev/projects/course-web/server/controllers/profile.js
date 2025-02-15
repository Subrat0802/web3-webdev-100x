const { ZodError } = require("zod");
const Profile = require("../models/profile");
const User = require("../models/users");
const { zodProfileSchema } = require("../utils/zodAuth");


exports.addProfileInfo = async (req, res) => {
    try{
        const validationProfile = await zodProfileSchema.parseAsync(req.body);
        const {address, phone, dateofbirth, gender} = validationProfile;
        const {id} = req.user;

        const findUser = await User.findOne({_id: id});

        const response = await Profile.findByIdAndUpdate(
            {_id: findUser.additionalDetails}, 
            {address, phone, dateofbirth, gender},
            {new: true}
        )

        if(!response){
            return res.status(409).json({
                message:"invalid credentials, Please try again, fill carefully you profile data"
            })
        }

        res.status(200).json({
            data: response,
            message:"Profile updated successfully",
            success:true
        })
    }catch (error) {
          if(error instanceof ZodError){
              return res.status(408).json({
                  message:"invalid credentials",
                  error:error.errors
              }) 
          }else if (error.name === "TimeoutError") {
              res.status(408).json({
                message: "Request timeout, please try again later",
              })
          }
          else{
              return res.status(500).json({
                  message:"Server error",
                  error:error.message
              })
          }
        }
}