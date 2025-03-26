import { Link } from 'react-router-dom';
import notFound from '../assets/pictures/404.png';
import { TiArrowRightThick } from "react-icons/ti";

function NotFound() {
  return (
    <div className="container text-start">     
      <div className="mb-4">
        <Link to="/" className="home-link">
            Accueil
        </Link>
      </div>
      <h1 className="decorative-line mb-3">Erreur 404</h1>
      <p className="lead fw-bold mb-5">
        Cette page n'existe pas !
      </p>
      <img
        src={notFound}
        alt="Erreur 404 / Page non trouvée"
        className="img-fluid w-100 mb-4 img-bordered"
      />
      <div>
        <Link to="/" className="btn btn-primary mt-3">
          Retourner à la page d'accueil <TiArrowRightThick className="ms-1 marge-negative"/>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;