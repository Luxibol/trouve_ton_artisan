const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Modèle "Categorie" pour les catégories d'entreprises
const Categorie = sequelize.define('Categorie', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, { 
    timestamps: false,
    tableName: 'categories'
});

module.exports = Categorie;
