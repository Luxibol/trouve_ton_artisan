import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/categories')
      .then(res => res.json())
      .then(data => {
        console.log('Données des catégories:', data); // Ajoute ceci pour déboguer
        setCategories(data);
      })
      .catch(err => console.error('Erreur lors de la récupération des catégories:', err));
  }, []);

  return (
    <header className="py-3">
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
            placeholder="Rechercher un artisan..."
            style={{ maxWidth: '300px' }}
          />
        </div>
        <nav>
          <ul className="nav">
            {categories.map(category => (
              <li key={category.id} className="nav-item">
                <Link to={`/entreprises/${category.id}`} className="nav-link text-white">
                  {category.nom || 'Catégorie sans nom'} {/* Utilise nom au lieu de name */}
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