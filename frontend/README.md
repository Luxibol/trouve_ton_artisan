# Frontend - Trouve Ton Artisan

Interface utilisateur développée avec React, Vite, et Bootstrap pour une expérience fluide et responsive.



## Prérequis
- Node.js (v18+ recommandé)
- Vite.js (installé via npm)



## Installation

1. **Installer les dépendances** :
   cd frontend
   npm install


2. Configurer les variables d’environnement :
Créez un fichier .env dans frontend/ avec :

VITE_API_URL=http://localhost:5000/api

(En production, remplacez par l’URL de votre backend déployé.)


3. Lancer l’application :

npm start

L’interface sera accessible sur http://localhost:5173.



## Fonctionnalités

- Accueil : Affiche les artisans "top" du mois.

- Catégories : Menu déroulant pour filtrer les artisans.

- Liste d’entreprises : Par catégorie, avec cartes cliquables.

- Détails : Profil d’un artisan avec formulaire de contact.

- Recherche : Recherche par nom.



## Dépendances principales

- react et react-dom : Bibliothèque UI.

- react-router-dom : Navigation.

- bootstrap : Styles et responsive design.

- sass : Préprocesseur CSS.

- react-icons : Icônes pour l’interface utilisateur.