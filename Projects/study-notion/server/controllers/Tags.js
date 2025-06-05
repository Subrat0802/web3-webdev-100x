const Tags = require("../models/Tags");

exports.createTag = async(req, res) => {
    try{
        const {name, description} = req.body;

        if(!name || !description) {
            return res.status(408).josn({
                message:"All fields are required",
                success:false
            })
        }

        const tagDetails = await Tags.create({name, description});

        return res.status(200).json({
            success:true,
            message:"Tag is created successfully"
        })
    }catch(error){
        return res.status(500).json({
            message:"Error while creating tags",
            error:error.message,
            success:false
        })
    }
}

//get all tags

exports.showAllTags = async(req, res) => {
    try{
        const allTags = await Tags.find({}, {name:true, description:true});
        res.statsu(200).json({
            message:"All tags return successfully",
            success:true,
            data:allTags
        })
    }catch(error){
        return res.status(500).json({
            message:"Error while fetching tags",
            error:error.message,
            success:false
        })
    }
}