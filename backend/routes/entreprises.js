const express = require('express');
const { Op } = require('sequelize');
const Entreprise = require('../models/Entreprise');
const Categorie = require('../models/Categorie');
const sendEmail = require('../utils/email');
const router = express.Router();

// Récupérer toutes les entreprises
router.get('/', async (req, res) => {
    try {
        const entreprises = await Entreprise.findAll({ include: Categorie });
        res.json(entreprises);
    } catch (error) {
        console.error('Erreur lors de la récupération des entreprises:', error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Nouvelle route pour rechercher par nom
router.get('/search', async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.json(await Entreprise.findAll({ include: Categorie }));
        }

        const entreprises = await Entreprise.findAll({
            where: {
                nom: { [Op.like]: `%${query}%` },
            },
            include: Categorie,
        });
        res.json(entreprises);
    } catch (error) {
        console.error('Erreur lors de la recherche:', error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Récupérer les entreprises par catégorie
router.get('/categorie/:id', async (req, res) => {
    try {
        const entreprises = await Entreprise.findAll({ 
            where: { categorie_id: req.params.id },
            include: Categorie
        });
        res.json(entreprises);
    } catch (error) {
        console.error('Erreur lors de la récupération par catégorie:', error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Récupérer les entreprises "Top"
router.get('/top', async (req, res) => {
    try {
        const entreprises = await Entreprise.findAll({
            where: { top: true },
            include: Categorie
        });
        res.json(entreprises);
    } catch (error) {
        console.error('Erreur lors de la récupération des top entreprises:', error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Récupérer toutes les catégories (pour le header)
router.get('/categories', async (req, res) => {
    try {
        const categories = await Categorie.findAll();
        res.json(categories);
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Récupérer une entreprise spécifique par ID
router.get('/:id', async (req, res) => {
    try {
        const entreprise = await Entreprise.findByPk(req.params.id, { include: Categorie });
        if (entreprise) {
            res.json(entreprise);
        } else {
            res.status(404).json({ message: "Entreprise non trouvée" });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération de l’entreprise:', error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Nouvelle route pour gérer les messages de contact
router.post('/contact/:id', async (req, res) => {
    try {
      const entreprise = await Entreprise.findByPk(req.params.id);
      if (!entreprise || !entreprise.email) {
        return res.status(404).json({ message: "Entreprise ou email non trouvé" });
      }
  
      const { prenom, nom, email, message } = req.body;
      if (!prenom || !nom || !email || !message) {
        return res.status(400).json({ message: "Tous les champs sont requis" });
      }
  
      const subject = `Nouveau message de ${prenom} ${nom} via Trouve Ton Artisan`;
      const text = `Bonjour,\n\nVous avez reçu un nouveau message via Trouve Ton Artisan :\n\n` +
                   `De : ${prenom} ${nom}\n` +
                   `Email : ${email}\n` +
                   `Message :\n${message}\n\n` +
                   `Cordialement,\nL'équipe Trouve Ton Artisan`;
  
      try {
        await sendEmail(entreprise.email, subject, text);
      } catch (emailError) {
        console.error('Erreur dans sendEmail:', emailError);
        throw emailError;
      }
  
      res.status(200).json({ message: "Email envoyé avec succès" });
    } catch (error) {
      console.error('Erreur détaillée:', error);
      res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
    }
});

module.exports = router;