const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

const oauth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'http://localhost:5000/auth/callback' // URI de redirection
);

const scopes = ['https://www.googleapis.com/auth/gmail.send'];

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // Nécessaire pour obtenir un refresh token
  scope: scopes,
  prompt: 'consent', // Demande toujours le consentement
});

console.log('Ouvre ce lien dans ton navigateur pour t\'authentifier :', url);

const getToken = async (code) => {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('Tokens obtenus :', tokens);
    console.log('Refresh Token :', tokens.refresh_token); // Copie cette valeur
  } catch (err) {
    console.error('Erreur lors de l\'obtention du token :', err);
  }
};

// Remplace ceci par le code obtenu après t’être connecté
process.argv[2] && getToken(process.argv[2]);