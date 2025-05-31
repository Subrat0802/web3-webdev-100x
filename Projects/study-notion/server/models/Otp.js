const mongoose = require("mongoose");
const mailsender = require("../utils/mailSender");

const OTPSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires: 5*60
    }
})


//send email
async function sendVerificationEmail (email, otp) {
    try{    
        const mailResponse = await mailsender(email, "Verification Email from StudyNotion", otp);
        console.log("Email send successfully", mailResponse);
    }catch(error){
        console.log("Error occured while sending mail", error);
        throw Error;
    }
}

OTPSchema.pre("save", async function (next) {
    await sendVerificationEmail(this.email, this.otp);
    next();
})


moduel.exports = mongoose.model("OTP", OTPSchema);