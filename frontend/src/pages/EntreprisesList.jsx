import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

// Composant pour afficher la liste des entreprises d'une catégorie spécifique
function EntreprisesList() {
  // Récupération de l'ID de la catégorie depuis l'URL
  const { categoryId } = useParams();
  // Liste des entreprises
  const [entreprises, setEntreprises] = useState([]);
  // Nom de la catégorie
  const [categoryName, setCategoryName] = useState('');

   // Effet pour récupérer les entreprises par catégorie au chargement du composant
  useEffect(() => {
    console.log('Category ID reçu:', categoryId); // Débogage
    if (!categoryId || categoryId === 'undefined') {
      // Vérification de la validité de l'ID
      console.error('ID de catégorie invalide:', categoryId);
      return;
    }
    // Requête pour récupérer les entreprises de la catégorie spécifiée
    fetch(`http://localhost:5000/api/categorie/${categoryId}`)
      .then(res => res.json())
      .then(data => {
        console.log('Données des entreprises par catégorie:', data);
        // Mise à jour de la liste des entreprises
        setEntreprises(data);
        if (data.length > 0 && data[0].Categorie) {
          setCategoryName(data[0].Categorie.nom);
        }
      })
      .catch(err => console.error('Erreur lors de la récupération des entreprises:', err));
  }, [categoryId]); // Dépendance sur categoryId pour recharger les données à chaque changement d'ID de catégorie

  return (
    <div className="container">
      <h1 className="decorative-line mt-md-4 mt-3 pb-3">{categoryName || 'Catégorie inconnue'}</h1>
      <div className="row">
        {entreprises.length > 0 ? (
          entreprises.map(entreprise => (
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
            <p>Aucun artisan dans cette catégorie pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EntreprisesList;