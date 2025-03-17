import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

function Header() {
  return (
    <header className="background-color text-color py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <Link to="/">
            <img
              src={logo}
              alt="Trouve Ton Artisan Logo"
              style={{ height: '40px' }}
            />
          </Link>
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher"
            style={{ maxWidth: '300px' }}
          />
        </div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/entreprises/plombiers" className="nav-link text-color">Bâtiments</Link>
            </li>
            <li className="nav-item">
              <Link to="/entreprises/electriciens" className="nav-link text-color">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/entreprises/menuisiers" className="nav-link text-color">Fabrication</Link>
            </li>
            <li className="nav-item">
              <Link to="/entreprises/menuisiers" className="nav-link text-color">Alimentation</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;