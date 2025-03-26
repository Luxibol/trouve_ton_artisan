import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/pictures/Logo.png';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { API_URL } from '../config';

// Composant Header qui gère la navigation, la recherche et le menu responsive
function Header() {
  // État pour stocker les catégories récupérées depuis l'API
  const [categories, setCategories] = useState([]);  
  // État pour la saisie dans la barre de recherche
  const [searchQuery, setSearchQuery] = useState('');  
  // État pour ouvrir/fermer la barre de recherche sur mobile
  const [isSearchOpen, setIsSearchOpen] = useState(false);  
  // État pour ouvrir/fermer le menu burger sur mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);  
  // État pour savoir quel lien est sélectionné
  const [selectedCategory, setSelectedCategory] = useState(null); 
  // Hook pour rediriger l'utilisateur vers une nouvelle URL
  const navigate = useNavigate(); 
  // Utilisation de useLocation pour observer les changements d'URL
  const location = useLocation(); 

  // Récupération des catégories depuis l'API au chargement du composant
  useEffect(() => {
    fetch(`${API_URL}/categories`)
      .then(res => res.json())
      .then(data => {
        console.log('Categories fetched:', data);
        setCategories(data);
      })
      .catch(err => console.error('Erreur lors de la récupération des catégories:', err));
  }, []);

  // Réinitialisation de la catégorie sélectionnée si l'URL change
  useEffect(() => {
    const path = location.pathname;
    // Si l'URL actuelle ne correspond pas à une page d'entreprise ou catégorie, réinitialiser la sélection
    if (!path.includes('/entreprises/')) {
      setSelectedCategory(null); // Réinitialiser la catégorie sélectionnée
    }
  }, [location]); // Ce useEffect se déclenche chaque fois que l'URL change

  // Fonction pour gérer la soumission de la recherche
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    } else {
      navigate('/');
    }
  };

  // Déclenche la recherche avec la touche "Entrée"
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Met à jour la catégorie sélectionnée lors du clic sur un lien
  const handleLinkClick = (categoryId) => {
    setSelectedCategory(categoryId); // Met à jour l'état lors du clic
  };

  return (
    <header className="header-component shadow py-3">
      <div className="container-fluid px-3 px-lg-5">
        {/* Mobile: Logo, Search Icon, and Burger Menu */}
        <div className="d-flex justify-content-between align-items-center d-lg-none">
          <Link to="/" onClick={() => setSelectedCategory(null)}>
            <img src={logo} alt="Trouve Ton Artisan Logo" className="logo-img" />
          </Link>
          <div className="d-flex align-items-center gap-3">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="btn p-0 search-icon-button"
              aria-label={isSearchOpen ? "Fermer la recherche" : "Ouvrir la recherche"}
            >
              {isSearchOpen ? <FaTimes /> : <FaSearch />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn p-0 burger-menu-button"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Barre de recherche mobile, affichée uniquement si isSearchOpen est vrai */}
        {isSearchOpen && (
          <div className="d-lg-none mt-3 border-top pt-3">
            <div className="search-wrapper position-relative">
              <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                <input
                  type="text"
                  className="form-control pe-5"
                  placeholder="Rechercher"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  required
                />
                <button type="submit" className="search-icon position-absolute p-0 border-0 bg-transparent">
                  <FaSearch style={{ cursor: 'pointer' }} />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Desktop: Logo, Search Bar, and Navigation */}
        <div className="row d-none d-lg-flex align-items-center">
          <div className="col-md-3">
            <Link to="/" onClick={() => setSelectedCategory(null)}>
              <img src={logo} alt="Trouve Ton Artisan Logo" className="logo-img" />
            </Link>
          </div>
          <div className="col-md-9 d-flex justify-content-end">
            <div className="d-flex flex-column align-items-end gap-3">
              <div className="search-wrapper position-relative" style={{ maxWidth: '400px' }}>
                <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                  <input
                    type="text"
                    className="form-control pe-5"
                    placeholder="Rechercher"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    required
                  />
                  <button type="submit" className="search-icon position-absolute p-0 border-0 bg-transparent">
                    <FaSearch style={{ cursor: 'pointer' }} />
                  </button>
                </form>
              </div>
              <nav>
                <ul className="nav">
                  {categories.length > 0 ? (
                    categories.map(category => (
                      <li key={category.id} className="nav-item">
                        <Link
                          to={`/entreprises/${category.id}`}
                          className={`nav-link ${selectedCategory === category.id ? 'selected' : ''}`} // Ajout de la classe conditionnelle
                          onClick={() => handleLinkClick(category.id)} // Met à jour l'état lors du clic
                        >
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

        {/* Menu burger mobile, affiché uniquement si isMenuOpen est vrai */}
        <nav className={`d-lg-none ${isMenuOpen ? 'd-block' : 'd-none'} mt-3 border-top pt-3`}>
          <ul className="nav flex-column">
            {categories.length > 0 ? (
              categories.map(category => (
                <li key={category.id} className="nav-item">
                  <Link
                    to={`/entreprises/${category.id}`}
                    className={`nav-link ${selectedCategory === category.id ? 'selected' : ''}`} // Ajout de la classe conditionnelle
                    onClick={() => handleLinkClick(category.id)} // Met à jour l'état lors du clic
                  >
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