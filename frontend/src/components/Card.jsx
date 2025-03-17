import { Link } from 'react-router-dom';

function Card({ id, nom, specialite, note, ville }) {
  const renderStars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{nom || 'Artisan sans nom'}</h5>
        <p className="card-text">
          <span className="stars">{renderStars(note || 0)}</span> ({note || 0}/5)<br />
          {specialite || 'Non spécifiée'}<br />
          {ville || 'Non spécifiée'}
        </p>
        <Link to={`/entreprise/${id}`} className="btn btn-primary">
          Voir plus
        </Link>
      </div>
    </div>
  );
}

export default Card;