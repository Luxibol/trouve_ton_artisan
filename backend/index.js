const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = 5000; 

app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});


app.use(cors());
app.use(express.json());

sequelize.authenticate()
  .then(() => console.log('Connexion à la base de données réussie'))
  .catch((err) => console.error('Impossible de se connecter à la base de données:', err));

app.get('/', (req, res) => {
  res.send('API backend fonctionne!');
});


