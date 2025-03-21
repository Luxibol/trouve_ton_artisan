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
        console.log('Categories fetched:', data); // Ajout pour déboguer
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

  // Ajout d'un message de débogage pour vérifier que le composant est rendu
  console.log('Header rendered', { isSearchOpen, isMenuOpen, categories });

  return (
    <header className="header-bg-color py-3">
      <div className="container-fluid px-0">
        {/* Section Logo et Menu Burger/Search sur mobile */}
        <div className="d-flex justify-content-between align-items-center px-3 d-md-none">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="Trouve Ton Artisan Logo" className="logo-img" />
            </Link>
          </div>
          <div className="d-flex align-items-center">
            {isSearchOpen ? (
              <div className="search-input-container w-100 position-relative">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Rechercher"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  autoFocus
                />
                <button onClick={() => setIsSearchOpen(false)} className="close-search-button">
                  <FaTimes />
                </button>
              </div>
            ) : (
              <button onClick={() => setIsSearchOpen(true)} className="search-icon-button me-3">
                <FaSearch />
              </button>
            )}
            <button
              className="burger-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Barre de recherche mobile (sous le header) */}
        {isSearchOpen && (
          <div className="d-md-none search-bar-mobile px-3 mt-3">
            <div className="search-bar d-flex align-items-center">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Rechercher"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
              />
              <button onClick={handleSearch} className="search-button">
                <FaSearch />
              </button>
            </div>
          </div>
        )}

        {/* Section Barre de recherche et Navigation sur desktop */}
        <div className="row d-none d-md-flex align-items-center px-3">
          <div className="col-md-3">
            <div className="logo-container">
              <Link to="/">
                <img src={logo} alt="Trouve Ton Artisan Logo" className="logo-img" />
              </Link>
            </div>
          </div>
          <div className="col-md-9 d-flex justify-content-end">
            <div className="d-flex flex-column align-items-end">
              <div className="search-bar-container mt-3">
                <div className="search-bar d-flex align-items-center">
                  <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Rechercher"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button onClick={handleSearch} className="search-button">
                    <FaSearch />
                  </button>
                </div>
              </div>
              <nav className="category-nav mt-3">
                <ul className="nav">
                  {categories.length > 0 ? (
                    categories.map(category => (
                      <li key={category.id} className="nav-item">
                        <Link to={`/entreprises/${category.id}`} className="nav-link">
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

        {/* Navigation des catégories sur mobile (menu burger) */}
        <nav className={`category-nav d-md-none ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav flex-column">
            {categories.length > 0 ? (
              categories.map(category => (
                <li key={category.id} className="nav-item">
                  <Link to={`/entreprises/${category.id}`} className="nav-link">
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