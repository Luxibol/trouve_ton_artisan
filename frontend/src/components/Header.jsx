import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/pictures/Logo.png';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/categories')
      .then(res => res.json())
      .then(data => {
        console.log('Categories fetched:', data);
        setCategories(data);
      })
      .catch(err => console.error('Erreur lors de la récupération des catégories:', err));
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    } else {
      navigate('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="bg-white shadow py-3">
      <div className="container-fluid px-3 px-lg-5">
        {/* Mobile: Logo, Search Icon, and Burger Menu */}
        <div className="d-flex justify-content-between align-items-center d-md-none">
          <Link to="/">
            <img src={logo} alt="Trouve Ton Artisan Logo" className="logo-img" />
          </Link>
          <div className="d-flex align-items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="btn p-0"
              aria-label={isSearchOpen ? "Fermer la recherche" : "Ouvrir la recherche"}
            >
              {isSearchOpen ? <FaTimes /> : <FaSearch />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn p-0"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile: Search Bar */}
        {isSearchOpen && (
          <div className="d-md-none mt-3 border-top pt-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Rechercher"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
              />
              <button onClick={handleSearch} className="btn btn-outline-primary">
                <FaSearch />
              </button>
            </div>
          </div>
        )}

        {/* Desktop: Logo, Search Bar, and Navigation */}
        <div className="row d-none d-md-flex align-items-center">
          <div className="col-md-3">
            <Link to="/">
              <img src={logo} alt="Trouve Ton Artisan Logo" className="logo-img" />
            </Link>
          </div>
          <div className="col-md-9 d-flex justify-content-end">
            <div className="d-flex flex-column align-items-end gap-3">
              <div className="input-group" style={{ maxWidth: '400px' }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Rechercher"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button onClick={handleSearch} className="btn btn-outline-primary">
                  <FaSearch />
                </button>
              </div>
              <nav>
                <ul className="nav">
                  {categories.length > 0 ? (
                    categories.map(category => (
                      <li key={category.id} className="nav-item">
                        <Link to={`/entreprises/${category.id}`} className="nav-link text-dark">
                          {category.nom || 'Catégorie sans nom'}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="nav-item">Chargement des catégories...</li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile: Burger Menu */}
        <nav className={`d-md-none ${isMenuOpen ? 'd-block' : 'd-none'} mt-3 border-top pt-3`}>
          <ul className="nav flex-column">
            {categories.length > 0 ? (
              categories.map(category => (
                <li key={category.id} className="nav-item">
                  <Link to={`/entreprises/${category.id}`} className="nav-link text-dark">
                    {category.nom || 'Catégorie sans nom'}
                  </Link>
                </li>
              ))
            ) : (
              <li className="nav-item">Chargement des catégories...</li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;