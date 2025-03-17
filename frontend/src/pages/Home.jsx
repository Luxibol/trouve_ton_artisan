import { useState, useEffect } from 'react';
import Card from '../components/Card';

function Home() {
  const [topEntreprises, setTopEntreprises] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/top')
      .then(res => res.json())
      .then(data => {
        console.log('Données des entreprises top:', data); // Pour déboguer
        setTopEntreprises(data);
      })
      .catch(err => console.error('Erreur lors de la récupération des entreprises top:', err));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="decorative-line">Comment trouver mon artisan ?</h1>
      <ol>
        <li>Choisir la catégorie d'artisanat dans le menu.</li>
        <li>Choisir un artisan.</li>
        <li>Le contacter via le formulaire de contact.</li>
        <li>Une réponse sera apportée sous 48h.</li>
      </ol>
      <h2 className="decorative-line-green mt-5">Top du mois</h2>
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