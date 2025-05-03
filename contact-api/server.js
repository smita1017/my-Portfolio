const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,     // Your Gmail address
    pass: process.env.EMAIL_PASS      // Your App Password
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("API is running.");
});

// Contact form POST route
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const subject = req.body.subject || "New Contact Message";

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "smita126@gmail.com",
      subject,
      text: `You have a new message from your portfolio:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });

  } catch (error) {
    console.error("Error while sending email:", error);
    res.status(500).json({ success: false, message: "Something went wrong on the server" });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
