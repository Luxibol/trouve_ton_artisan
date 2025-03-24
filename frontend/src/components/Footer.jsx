import { Link } from 'react-router-dom';
import logo from '../assets/pictures/Logo.png';

// Composant Footer pour afficher le pied de page du site
function Footer() {
  return (
    <footer className="py-1 pt-md-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 px-md-5">
            <Link to="/">
              <img
                src={logo}
                alt="Logo Trouve Ton Artisan"
                className="img-fluid px-md-5 logo-footer position-relative top-n5"
              />
            </Link>
          </div>
          <div className="col-md-6 px-5 ">
            <p className="mb-1 fw-bold">Lyon</p>
            <p className="mb-1">
              101 cours Charlemagne<br/>
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              <a href="tel:+33426734000" className="text-white">+33 (0)4 26 73 40 00</a>
            </p>
          </div>
        </div>
        <hr className="bg-light opacity-100 border-white my-3"/>
        <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-md-center gap-md-4 gap-1 px-4"> 
          <li><Link to="/legal/mentions" className="text-white link">Mentions légales</Link></li>
          <li><Link to="/legal/donnees-personnelles" className="text-white link">Données personnelles</Link></li>
          <li><Link to="/legal/accessibilite" className="text-white link">Accessibilité</Link></li>
          <li><Link to="/legal/cookies" className="text-white link">Cookies</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
