import { Link } from 'react-router-dom';
import logo from '../assets/pictures/Logo.png';

function Footer() {
  return (
    <footer className="bg-primary text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <Link to="/">
              <img
                src={logo}
                alt="Trouve Ton Artisan Logo"
                className="img-fluid"
                style={{ height: '150px' }}
              />
            </Link>
          </div>
          <div className="col-md-6">
            <p className="mb-1">Lyon</p>
            <p className="mb-1">
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              <a href="tel:+33426734000" className="text-white">+33 (0)4 26 73 40 00</a>
            </p>
          </div>
        </div>
        <hr className="bg-light my-3" />
        <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-md-center gap-3">
          <li><Link to="/legal/mentions" className="text-white text-decoration-none">Mentions légales</Link></li>
          <li><Link to="/legal/donnees-personnelles" className="text-white text-decoration-none">Données personnelles</Link></li>
          <li><Link to="/legal/accessibilite" className="text-white text-decoration-none">Accessibilité</Link></li>
          <li><Link to="/legal/cookies" className="text-white text-decoration-none">Cookies</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;