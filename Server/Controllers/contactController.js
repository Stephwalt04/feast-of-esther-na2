const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail", // Replace with your email provider
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

let contactMail = (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
};

module.exports = { contactMail };
