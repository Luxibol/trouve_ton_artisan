const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

const entrepriseRoutes = require('./routes/entreprises');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion à la base de données
sequelize.authenticate()
  .then(() => console.log('Connexion à la base de données réussie'))
  .catch((err) => console.error('Impossible de se connecter à la base de données:', err));

// Routes
app.use('/entreprises', entrepriseRoutes);
app.get('/', (req, res) => res.send('API backend fonctionne!'));

module.exports = app;
