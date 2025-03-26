import { Link } from 'react-router-dom';
import StarRating from './StarRating';

function Card({ id, nom, specialite, note, ville }) {
  return (
    <Link to={`/entreprise/${id}`} className="card h-100 text-decoration-none">
      <div className="card-body">
        <h3 className="card-title">
          {nom || 'Artisan sans nom'}
        </h3>
        <div className="card-text d-flex align-items-center mb-2"> 
          <StarRating rating={note || 0} />
        </div>
        <p>
          <em>{specialite || 'Non spécifiée'}</em><br />
          {ville || 'Non spécifiée'}
        </p>
      </div>
    </Link>
  );
}

export default Card;
