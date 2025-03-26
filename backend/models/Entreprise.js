const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categorie = require('./Categorie');

// Modèle "Entreprise" pour les entreprises de l'annuaire
const Entreprise = sequelize.define('Entreprise', {
    nom: { 
        type: DataTypes.STRING,
         allowNull: false
    },
    specialite: { 
        type: DataTypes.STRING,
         allowNull: false
    },
    note: { 
        type: DataTypes.FLOAT,
         validate: { min: 0, max: 5 } 
    },
    ville: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    a_propos: { 
        type: DataTypes.TEXT 
    },
    email: { 
        type: DataTypes.STRING, 
        unique: true 
    },
    site_web: { 
        type: DataTypes.STRING 
    },
    top: { 
        type: DataTypes.BOOLEAN, 
        defaultValue: false 
    },
    image_url: { 
        type: DataTypes.STRING 
    }
}, { 
    timestamps: false,
    tableName: 'entreprises'
});

Categorie.hasMany(Entreprise, { foreignKey: 'categorie_id' });
Entreprise.belongsTo(Categorie, { foreignKey: 'categorie_id' });

module.exports = Entreprise;
