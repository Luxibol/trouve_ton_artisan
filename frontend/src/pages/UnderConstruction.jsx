import { Link } from 'react-router-dom';
import construct from '../assets/pictures/construct.jpg';

function UnderConstruction() {
  return (
    <div className="container text-start">
      {/* Lien Accueil au-dessus du titre */}
      <div className="mb-4">
        <Link to="/">Accueil</Link>
      </div>

      {/* Titre */}
      <h1 className="decorative-line mb-3">Page en construction</h1>

      {/* Paragraphe */}
      <p className="lead fw-bold mb-5">
        Page bientôt disponible.
      </p>

      {/* Image */}
      <img
        src={construct}
        alt="Silouhaite qui bâtit un mur / Page en construction"
        className="img-fluid w-100 mb-4"
      />

      {/* Bouton sous l'image */}
      <div>
        <Link to="/" className="btn btn-primary mt-3">
          Retourner à la page d'accueil →
        </Link>
      </div>
    </div>
  );
}

export default UnderConstruction;