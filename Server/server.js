const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const adminRouter = require("./routes/adminRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/admin", adminRouter);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  res.send("Welcome on board");
});
// Nodemailer Transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail", // Replace with your email provider
//   auth: {
//     user: "kolawoledolapo115@gmail.com",
//     pass: "jixschjrfqdmaqjz",
//   },
// });
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API endpoint to send email
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "kolawoledolapo115@gmail.com, feastofesthernc@gmail.com",
    subject: `${name} sending Email from Contact Form`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent: " + info.response);
  });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App listening to https://localhost:${port}`);
});
