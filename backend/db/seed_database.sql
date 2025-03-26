-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 26 mars 2025 à 15:53
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `trouve_ton_artisan`
--

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `nom`, `created_at`) VALUES
(1, 'Alimentation', '2025-03-20 15:52:38'),
(2, 'Bâtiment', '2025-03-20 15:52:38'),
(3, 'Fabrication', '2025-03-20 15:52:38'),
(4, 'Services', '2025-03-20 15:52:38');

--
-- Déchargement des données de la table `entreprises`
--

INSERT INTO `entreprises` (`id`, `nom`, `specialite`, `note`, `ville`, `a_propos`, `email`, `site_web`, `categorie_id`, `top`, `image_url`, `created_at`, `updated_at`) VALUES
(1, 'Boucherie Dumont', 'Boucher', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'boucherie.dumond@gmail.com', NULL, 1, 0, 'https://i.imgur.com/rFosFEE.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(2, 'Au pain chaud', 'Boulanger', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'aupainchaud@hotmail.com', NULL, 1, 1, 'https://i.imgur.com/GZqjxpY.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(3, 'Chocolaterie Labbé', 'Chocolatier', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 1, 1, 'https://i.imgur.com/QFATkhp.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(4, 'Traiteur Truchon', 'Traiteur', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 1, 0, 'https://i.imgur.com/KezywPX.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(5, 'Orville Salmons', 'Chauffagiste', 5.0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'o-salmons@live.com', NULL, 2, 1, 'https://i.imgur.com/hKdMVVi.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(6, 'Mont Blanc Électricité', 'Électricien', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'contact@mont-blanc-electricite.com\r\n', 'https://mont-blanc-electricite.com', 2, 0, 'https://i.imgur.com/NQljes8.jpeg', '2025-03-20 15:52:38', '2025-03-26 14:52:07'),
(7, 'Boutot & fils', 'Menuisier', 4.7, 'Bourg-en-Bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 2, 0, 'https://i.imgur.com/KuT8NM7.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(8, 'Vallis Bellemare', 'Plombier', 4.0, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 2, 0, 'https://i.imgur.com/b2Y3BV5.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(9, 'Claude Quinn', 'Bijoutier', 4.2, 'Aix-les-Bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'claude.quinn@gmail.com', NULL, 3, 0, 'https://i.imgur.com/tjupDrB.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(10, 'Amitee Lécuyer', 'Couturier', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 3, 0, 'https://i.imgur.com/YSQBjZk.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(11, 'Ernest Carignan', 'Ferronnier', 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'e-carigan@hotmail.com', NULL, 3, 0, 'https://i.imgur.com/rcQ9KNg.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(12, 'Royden Charbonneau', 'Coiffeur', 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'r.charbonneau@gmail.com', NULL, 4, 0, 'https://i.imgur.com/U7qeL54.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(13, 'Leala Dennis', 'Coiffeur', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 4, 0, 'https://i.imgur.com/U7qeL54.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(14, 'C\'est sup\'hair', 'Coiffeur', 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'sup-hair@gmail.com', 'https://sup-hair.fr', 4, 0, 'https://i.imgur.com/U7qeL54.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(15, 'Le monde des fleurs', 'Fleuriste', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 4, 0, 'https://i.imgur.com/adCmA84.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(16, 'Valérie Laderoute', 'Toiletteur', 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'v-laredoute@gmail.com', NULL, 4, 0, 'https://i.imgur.com/ZE8tJ6k.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38'),
(17, 'CM Graphisme', 'Webdesign', 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 4, 0, 'https://i.imgur.com/IOz8dk9.jpeg', '2025-03-20 15:52:38', '2025-03-20 15:52:38');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
