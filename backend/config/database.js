const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    dialectOptions: {
      connectTimeout: 60000, // Timeout de 60s pour éviter les échecs de connexion lente
      ssl: {
        require: true, // Force l'utilisation de SSL pour la sécurité
        rejectUnauthorized: false, // Désactive la vérification stricte des certificats
      },
    },
  },
);

module.exports = sequelize;
