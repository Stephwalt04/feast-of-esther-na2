const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
const adminRouter = require("./routes/adminRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "https://feastofesther2.vercel.app/", // Update to your frontend's domain
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Root API Route
app.get("/api", (req, res) => {
  res.send("API is working!");
});

// Admin Routes
app.use("/api/admin", adminRouter);

// Send Email Route
app.post("/api/send-email", (req, res) => {
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

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start Server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
