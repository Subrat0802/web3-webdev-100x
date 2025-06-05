const SubSection = require("../models/SubSection");
const Section = require("../models/Section");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.createSubSection = async (req, res) => {
  try {
    //fetch data from req body
    const { title, sectionId, timeDuration, description } = req.body;
    //extract file/video
    const video = req.files.videoFile;
    //validation
    if (!title || !video || !sectionId || !timeDuration || !description) {
      return res.status(409).json({
        message: "All data is required",
        success: true,
      });
    }

    //upload video to cloudinary
    const uploadDetails = await uploadImageToCloudinary(
      video,
      process.env.FOLDER_NAME
    );

    //create a sub-section
    const subSectionDetails = await SubSection.create({
      title,
      timeDuration,
      description,
      videoUrl: uploadDetails.secure_url,
    });

    //upload section with this sub section ObjectId
    await Section.findByIdAndUpdate(
      { sectionId },
      { $push: { subSection: subSectionDetails._id } },
      { new: true }
    );
    //return response

    return res.status(200).json({
      message: "Sub section created successfully",
      data: subSectionDetails,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error while creating sub section",
      error: error.message,
      success: false,
    });
  }
};


//update sub section

//delete sub section