import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Card from "../components/Card";

function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]); // Si aucun terme de recherche, ne charge pas tous les artisans
      return;
    }

    const fetchResults = async () => {
      setLoading(true);
      try {
        const url = `http://localhost:5000/api/search?query=${encodeURIComponent(query)}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        setResults(data);
        setError(null);
      } catch (error) {
        console.error("Erreur lors de la recherche:", error);
        setError("Une erreur est survenue lors de la recherche. Veuillez réessayer plus tard.");
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
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Fonction pour réinitialiser la recherche
  const handleResetSearch = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setSearchParams({});
    setResults([]); // Vide les résultats affichés
  };

  return (
    <div className="container py-2">
      {/* Lien vers l'accueil */}
      <div className="mb-4">
        <Link to="/" className="home-link">
          Accueil
        </Link>
      </div>

      {/* Barre de recherche */}
      <div className="search-container mb-4">
        <h2 className="mb-5">Modifier la recherche</h2>
        <label htmlFor="searchInput" className="mb-3">Rechercher par nom d'artisan</label>
        <div className="search-bar-results d-flex align-items-center">
          <input
            type="text"
            id="searchInput"
            className="form-control search-input-results"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <hr className="search-separator" /> {/* Séparateur entre recherche et Réinitialiser */}

        <div className="d-flex justify-content-lg-end">
          <a href="#" className="gray-link" onClick={handleResetSearch}>
            Réinitialiser
          </a>
        </div>
      </div>

      {/* Message si aucune recherche n'est entrée */}
      {query.trim() === "" && !loading && !error && (
        <p className="text-muted">Entrez votre recherche dans le champ ci-dessus "Rechercher par nom d'artisan"</p>
      )}

      {/* Nombre de résultats */}
      {results.length > 0 && !error && !loading && query.trim() !== "" && (
        <p className="mb-4">
          {results.length} résultat{results.length > 1 ? "s" : ""} pour "{query}"
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
        !loading && query.trim() !== "" && <p>Aucun artisan trouvé pour "{query}".</p>
      )}
    </div>
  );
}

export default SearchResults;
