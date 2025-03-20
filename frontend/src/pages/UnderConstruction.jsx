import { Link } from 'react-router-dom';
import construct from '../assets/pictures/construct.jpg';

function UnderConstruction() {
  return (
    <div className="container mt-5 text-center">
        <Link to="/">
            Accueil
        </Link>
      <h1 className="decorative-line">Page en construction</h1>
      <p className="lead">
        Cette page sera bientôt disponible.
        Revenez plus tard ou contactez-nous pour plus d'informations.
      </p>
        <img
            src={construct}
            alt="Silouhaite qui bâtit un mur / Page en construction"
            className="img-fluid mb-4"
            style={{ maxWidth: '300px' }}
        />
      <Link to="/" className="btn btn-primary mt-3">
        Retour à l'accueil →
      </Link>
    </div>
  );
}

export default UnderConstruction;