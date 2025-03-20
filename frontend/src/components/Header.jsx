import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { FaSearch } from 'react-icons/fa';

function Header() {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/categories')
      .then(res => res.json())
      .then(data => {
        console.log('Données des catégories:', data);
        setCategories(data);
      })
      .catch(err => console.error('Erreur lors de la récupération des catégories:', err));
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
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
    <header className="py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <Link to="/">
            <img
              src={logo}
              alt="Trouve Ton Artisan Logo"
              className="logo-img"
            />
          </Link>
        </div>
        <div className="search-bar d-flex align-items-center">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Rechercher un artisan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch} className="search-button">
            <FaSearch />
          </button>
        </div>
        <nav>
          <ul className="nav">
            {categories.map(category => (
              <li key={category.id} className="nav-item">
                <Link to={`/entreprises/${category.id}`} className="nav-link text-white">
                  {category.nom || 'Catégorie sans nom'}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;