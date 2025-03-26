# Trouve Ton Artisan

Une plateforme pour trouver et contacter des artisans locaux en France.



## Description

"Trouve Ton Artisan" est une application web qui permet aux utilisateurs de :
- Consulter une liste d’artisans par catégorie (ex. : Alimentation, Bâtiment).
- Voir les détails d’un artisan (nom, spécialité, note, ville, etc.).
- Contacter un artisan via un formulaire d’email.
- Découvrir les artisans mis en avant ("top") sur la page d’accueil.

Le projet est divisé en deux parties : un backend (API REST) et un frontend (interface React).



## Structure

- **`backend/`** : API Node.js avec Express et Sequelize pour gérer la base de données MySQL. Voir `backend/README.md`.
- **`frontend/`** : Interface utilisateur React avec Vite et Bootstrap. Voir `frontend/README.md`.
- **`backend/db/`** :
  - `create_database.sql` : Script de création de la base de données et de l’utilisateur MySQL.
  - `seed_database.sql` : Données initiales (4 catégories, 17 entreprises).



## Prérequis

- Node.js (v18+ recommandé)
- MySQL (ou MariaDB)
- phpMyAdmin (ou un autre client MySQL)



## Installation rapide

1. Clonez le dépôt :
   git clone https://github.com/ton-username/trouve-ton-artisan.git
   cd trouve-ton-artisan


2. Suivez les instructions dans backend/README.md et frontend/README.md.



## Auteur

Luxibol