import { Link } from 'react-router-dom';

// Composant Card pour afficher une carte d'artisan avec ses informations
function Card({ id, nom, specialite, note, ville }) {

  // Fonction pour rendre les étoiles en fonction de la note
  const renderStars = (rating) => {
    const maxRating = 5;
    const fullStars = Math.floor(rating); 
    const halfStar = rating - fullStars >= 0.5; 
    const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0);

    // Tableau pour stocker les éléments d'étoiles
    const stars = [];
    
    // Ajouter les étoiles pleines
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span className="star full" key={`full-${i}`}>★</span>);
    }

    // Ajouter la demi-étoile si nécessaire
    if (halfStar) {
      stars.push(<span className="star half" key="half">⯨</span>);
    }

    // Ajouter les étoiles vides
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span className="star empty" key={`empty-${i}`}>☆</span>);
    }

    return <div className="stars d-flex align-items-center">{stars}</div>;
  };

  return (
    // Lien vers la page détaillée de l'entreprise
    <Link to={`/entreprise/${id}`} className="card h-100 text-decoration-none">
      <div className="card-body">
        <h3 className="card-title">
          {nom || 'Artisan sans nom'}
        </h3>
        <p className="card-text d-flex align-items-center mb-2"> 
          {renderStars(note || 0)} 
          <span className="ml-2">({note || 0}/5)</span> 
        </p>
        <p>
          <em>{specialite || 'Non spécifiée'}</em><br />
          {ville || 'Non spécifiée'}
        </p>
      </div>
    </Link>
  );
}

export default Card;
