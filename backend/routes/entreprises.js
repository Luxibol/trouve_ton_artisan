const express = require('express');
const Entreprise = require('../models/Entreprise');
const Categorie = require('../models/Categorie');
const router = express.Router();

// Récupérer toutes les entreprises
router.get('/', async (req, res) => {
    try {
        const entreprises = await Entreprise.findAll({ include: Categorie });
        res.json(entreprises);
    } catch (error) {
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
        res.status(500).json({ message: "Erreur serveur" });
    }
});

// Récupérer toutes les catégories (pour le header)
router.get('/categories', async (req, res) => {
    try {
        const categories = await Categorie.findAll();
        res.json(categories);
    } catch (error) {
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
        res.status(500).json({ message: "Erreur serveur" });
    }
});

module.exports = router;