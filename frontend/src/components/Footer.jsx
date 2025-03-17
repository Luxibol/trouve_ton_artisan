import logo from '../assets/Logo.png';

function Footer() {
    return (
      <footer className="bg-footer text-white text-center py-3 mt-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo-container">
              <img
                src={logo}
                alt="Trouve Ton Artisan Logo"
                style={{ height: '60px' }}
              />
            </div>
            <div className="footer-links">
              <a href="#" className="text-white mx-2">Mentions légales</a> |
              <a href="#" className="text-white mx-2">Données personelles</a> |
              <a href="#" className="text-white mx-2">Accessibilité</a> |
              <a href="#" className="text-white mx-2">Cookies</a>
            </div>
          </div>
          <p className="mt-2">© 2025 Trouve Ton Artisan - Tous droits réservés</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;