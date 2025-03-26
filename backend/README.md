# Backend - Trouve Ton Artisan

API RESTful développée avec Node.js, Express et Sequelize pour gérer les artisans et leurs catégories.



## Prérequis
- Node.js (v18+ recommandé)
- MySQL (ou MariaDB)



## Installation

1. **Installer les dépendances** :
   cd backend
   npm install


2. Configurer les variables d’environnement :
Créez un fichier .env dans backend/ en copiant l'exemple ci-dessous, puis éditez-le avec vos valeurs, par exemple :

DB_HOST=localhost
DB_USER=trouve_ton_artisan
DB_PASSWORD=ton-mot-de-passe
DB_NAME=trouve_ton_artisan
DB_PORT=3306
PORT=5000
EMAIL_USER=ton-email@gmail.com
EMAIL_PASS=ton-mot-de-passe-d-application
NODE_ENV=development
FRONTEND_URL=http://localhost:5173


(En production, remplacez FRONTEND_URL par l’URL de votre frontend déployé.)
(Pour EMAIL_PASS, créez un mot de passe d’application via les paramètres de sécurité de votre compte email, par exemple sur Google.)


3. Configurer la base de données :

Dans phpMyAdmin (ou un client MySQL) :

Importez db/create_database.sql pour créer la base et l’utilisateur.

Importez db/seed_database.sql pour ajouter les données initiales.


4. Lancer l’API :

npm run dev

L’API sera disponible sur http://localhost:5000.


## Endpoints principaux

- GET /api/top : Récupère les artisans "top".

- GET /api/categories : Liste toutes les catégories.

- GET /api/categorie/:id : Liste les entreprises d’une catégorie.

- GET /api/:id : Détails d’une entreprise.

- POST /api/contact/:id : Envoie un email à une entreprise.



## Dépendances principales

- express : Framework web.

- sequelize et mysql2 : ORM et pilote MySQL.

- nodemailer : Envoi d’emails.

- cors : Gestion des requêtes cross-origin.

- helmet : Sécurité des en-têtes HTTP.

- dotenv : Charge les variables d’environnement depuis le fichier .env.