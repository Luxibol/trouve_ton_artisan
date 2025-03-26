const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendEmail(to, subject, text, from = `"Trouve Ton Artisan" <${process.env.EMAIL_USER}>`) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé:', info.response);
    return info;
  } catch (error) {
    console.error('Erreur complète:', error);
    throw new Error('Erreur lors de l’envoi de l’email');
  }
}

module.exports = sendEmail;