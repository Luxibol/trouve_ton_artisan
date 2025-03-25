import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Card from '../components/Card';

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const url = query
          ? `http://localhost:5000/api/search?query=${encodeURIComponent(query)}`
          : 'http://localhost:5000/api/';
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        setResults(data);
        setError(null);
      } catch (error) {
        console.error('Erreur lors de la recherche:', error);
        setError('Une erreur est survenue lors de la recherche. Veuillez réessayer plus tard.');
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [query]);

  // Fonction pour gérer une nouvelle recherche
  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearchParams({ query: searchQuery });
    } else {
      setSearchParams({});
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="container py-5">
      {/* Lien vers l'accueil */}
      <div className="mb-3">
        <Link to="/" className="home-link">
          Accueil
        </Link>
      </div>

      {/* Barre de recherche */}
      <div className="mb-4">
        <h2 className="mb-3">Modifier la recherche</h2>
        <div className="search-bar-results d-flex align-items-center">
          <input
            type="text"
            className="form-control search-input-results"
            placeholder="Rechercher par mot clé"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>

      {/* Nombre de résultats */}
      {results.length > 0 && !error && !loading && (
        <p className="mb-4">
          {results.length} résultat{results.length > 1 ? 's' : ''} pour "{query || 'tous les artisans'}"
        </p>
      )}

      {/* Indicateur de chargement */}
      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      )}

      {/* Affichage des résultats */}
      {error ? (
        <p className="text-danger">{error}</p>
      ) : results.length > 0 ? (
        <div className="row">
          {results.map((entreprise) => (
            <div key={entreprise.id} className="col-12 mb-4">
              <Card
                id={entreprise.id}
                nom={entreprise.nom}
                specialite={entreprise.specialite}
                note={entreprise.note}
                ville={entreprise.ville}
              />
            </div>
          ))}
        </div>
      ) : (
        !loading && (
          <p>Aucun artisan trouvé pour "{query}".</p>
        )
      )}
    </div>
  );
}

export default SearchResults;