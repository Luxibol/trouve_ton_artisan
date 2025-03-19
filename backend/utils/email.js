const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendEmail(to, subject, text, from = `"Trouve Ton Artisan" <${process.env.EMAIL_USER}>`) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER, // Récupère l’email depuis .env
        pass: process.env.EMAIL_PASS, // Récupère le mot de passe depuis .env
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

async function testEmail() {
  try {
    const info = await sendEmail('email', 'Test Subject', 'Ceci est un test avec alias'); // Change email avec le mail sur lequel on veut recevoir le test
    console.log('Test réussi:', info);
  } catch (error) {
    console.error('Test échoué:', error);
  }
}
// testEmail(); // Décommente pour tester si besoin

module.exports = sendEmail;