const nodemailer = require("nodemailer");
require("dotenv").config();

const mailsender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        host: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
        from: 'StudyNotion & Co.',
        to:`${email}`,
        subject: `${title}`,
        html:`${body}`
    })

    console.log(info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mailsender;
