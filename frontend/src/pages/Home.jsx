import { useState, useEffect } from 'react';
import Card from '../components/Card';
import artisan from '../assets/pictures/Artisan.png';
import { API_URL } from '../config';

function Home() {
  // Déclaration de l'état pour stocker les entreprises "top" (les entreprises mises en avant)
  const [topEntreprises, setTopEntreprises] = useState([]);

  // Utilisation du hook useEffect pour charger les données des entreprises "top" au chargement du composant
  useEffect(() => {
    // Requête vers l'API pour récupérer les entreprises "top"
    fetch(`${API_URL}/top`)
      .then(res => res.json())
      .then(data => {
        console.log('Données des entreprises top:', data);
        setTopEntreprises(data); // Mise à jour de l'état avec les données récupérées
      })
      .catch(err => console.error('Erreur lors de la récupération des entreprises top:', err));
  }, []); // Le tableau vide [] signifie que cet effet ne s'exécute qu'une seule fois au chargement du composant

  return (
    <div className="container">

      {/* Version PC Tablette*/}
      <div className="row align-items-start d-none d-md-flex mt-md-4 mb-5">
        <div className="col-md-6 image-container pe-lg-5 pe-md-3">
          {/* Image */}
          <img src={artisan} alt="Illustration Artisan" className="img-fluid home-img"/>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-start ps-lg-5 ps-md-3 pt-2 ">
          {/* Texte avec titre et liste */}
          <h1 className="decorative-line-green">Comment trouver mon artisan ?</h1>
          <ol className='mt-2'>
            <li>Choisir la catégorie d'artisanat dans le menu.</li>
            <li>Choisir un artisan.</li>
            <li>Le contacter via le formulaire de contact.</li>
            <li>Une réponse sera apportée sous 48h.</li>
          </ol>
        </div>
      </div>

      {/* Version Mobile */}
      <div className="row d-md-none mt-3 mb-4">
        {/* Titre */}
        <div className="col-12">
          <h1 className="decorative-line-green">Comment trouver mon artisan ?</h1>
        </div>
        {/* Image */}
        <div className="col-12 d-flex justify-content-center mt-2">
          <img src={artisan} alt="Illustration Artisan" className="img-fluid home-img"/>
        </div>
        {/* Liste */}
        <div className="col-12">
          <ol className='mt-3'>
            <li>Choisir la catégorie d'artisanat dans le menu.</li>
            <li>Choisir un artisan.</li>
            <li>Le contacter via le formulaire de contact.</li>
            <li>Une réponse sera apportée sous 48h.</li>
          </ol>
        </div>
      </div>

      {/* Section des entreprises top du mois */}
      <h2 className="decorative-line mb-4">Les artisans du mois</h2>
      <div className="row">
        {topEntreprises.length > 0 ? (
          topEntreprises.map(entreprise => (
            <div key={entreprise.id} className="col-md-4 mb-4">
              <Card
                id={entreprise.id}
                nom={entreprise.nom}
                specialite={entreprise.specialite}
                note={entreprise.note}
                ville={entreprise.ville}
                categorie={entreprise.Categorie ? entreprise.Categorie.nom : 'Inconnue'}
              />
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>Aucun artisan "top" pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
