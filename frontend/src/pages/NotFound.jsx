import { Link } from 'react-router-dom';
import notFound from '../assets/pictures/404.png';

function NotFound() {
  return (
    <div className="container mt-5 text-center">
        <Link to="/">
            Accueil
        </Link>
        <h1 className="decorative-line">Page non trouvée</h1>
        <p className="lead">Cette page n'existe pas !</p>
      <img
        src={notFound}
        alt="Erreur 404 / Page non trouvée"
        className="img-fluid mb-4"
        style={{ maxWidth: '300px' }}
      />
      <Link to="/" className="btn btn-primary mt-3">
        Retourner à la page d'accueil →
      </Link>
    </div>
  );
}

export default NotFound;