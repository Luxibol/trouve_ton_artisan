import { Link } from 'react-router-dom';
import logo from '../assets/pictures/Logo.png';

function Footer() {
  return (
    <footer className="footer-bg-color text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="logo-container col-md-6">
            <Link to="/">
              <img
               src={logo}
               alt="Trouve Ton Artisan Logo"
               style={{ height: '150px' }}
              />
            </Link>
          </div>
          <div className="col-md-6">
            <p>Lyon</p>
            <p>
              101 cours Charlemagne<br />
              CS 20033<br />
              69269 LYON CEDEX 02<br />
              France<br />
              <a href="tel:+33426734000" className="text-white">+33 (0)4 26 73 40 00</a>
            </p>
          </div>

        <hr className="bg-light" />
        <div>
            <ul className="list-unstyled d-flex gap-3 justify-content-md-center">
              <li><Link to="/legal/mentions" className="text-white text-decoration-none">Mentions légales</Link></li>
              <li><Link to="/legal/donnees-personnelles" className="text-white text-decoration-none">Données personnelles</Link></li>
              <li><Link to="/legal/accessibilite" className="text-white text-decoration-none">Accessibilité</Link></li>
              <li><Link to="/legal/cookies" className="text-white text-decoration-none">Cookies</Link></li>
            </ul>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;