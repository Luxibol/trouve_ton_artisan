import { Link } from 'react-router-dom';
import notFound from '../assets/pictures/404.png';
import { TiArrowRightThick } from "react-icons/ti";

function NotFound() {
  return (
    <div className="container text-start">
      {/* Lien Accueil au-dessus du titre */}      
      <div className="mb-4">
        <Link to="/" className="home-link">
            Accueil
        </Link>
      </div>
      
      {/* Titre */}
      <h1 className="decorative-line mb-3">Erreur 404</h1>

      {/* Paragraphe */}
      <p className="lead fw-bold mb-5">
        Cette page n'existe pas !
      </p>

      {/* Image */}
      <img
        src={notFound}
        alt="Erreur 404 / Page non trouvée"
        className="img-fluid w-100 mb-4 img-bordered"
      />

      {/* Bouton sous l'image */}
      <div>
        <Link to="/" className="btn btn-primary mt-3">
          Retourner à la page d'accueil <TiArrowRightThick className="ms-1 "/>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;