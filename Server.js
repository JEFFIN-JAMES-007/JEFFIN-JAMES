// server.js
const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// 1. Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolioDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

// 2. Define Contact Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  place: String,
  mobile: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);

// 3. Contact Form Route
app.post('/api/contact', async (req, res) => {
  const { name, place, mobile, email, message } = req.body;

  try {
    // Save to Database
    const newContact = new Contact({ name, place, mobile, email, message });
    await newContact.save();

    // Send Direct Email via Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS  // Your Gmail App Password
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message from ${name}`,
      text: `Name: ${name}\nPlace: ${place}\nMobile: ${mobile}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error submitting message:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));