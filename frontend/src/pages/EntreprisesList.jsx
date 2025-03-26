import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import { API_URL } from '../config';

function EntreprisesList() {
  const { categoryId } = useParams();
  const [entreprises, setEntreprises] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    console.log('Category ID reçu:', categoryId); 
    if (!categoryId || categoryId === 'undefined') {
      console.error('ID de catégorie invalide:', categoryId);
      return;
    }

    fetch(`${API_URL}/categorie/${categoryId}`)
      .then(res => res.json())
      .then(data => {
        console.log('Données des entreprises par catégorie:', data);
        setEntreprises(data);
        if (data.length > 0 && data[0].Categorie) {
          setCategoryName(data[0].Categorie.nom);
        }
      })
      .catch(err => console.error('Erreur lors de la récupération des entreprises:', err));
  }, [categoryId]);

  return (
    <div className="container">
      <h1 className="decorative-line-green mt-md-4 mt-3 pb-3">{categoryName || 'Catégorie inconnue'}</h1>
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