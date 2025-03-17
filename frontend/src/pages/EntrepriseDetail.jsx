import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function EntrepriseDetail() {
  const { id } = useParams(); // Récupère l'id de l'entreprise depuis l'URL
  const [entreprise, setEntreprise] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log('Données de l\'entreprise:', data); // Pour déboguer
        setEntreprise(data);
      })
      .catch(err => console.error('Erreur lors de la récupération des détails de l\'entreprise:', err));
  }, [id]);

  if (!entreprise) {
    return <div className="container mt-5">Chargement...</div>;
  }

  if (entreprise.message === "Entreprise non trouvée") {
    return (
      <div className="container mt-5">
        <h1 className="decorative-line">Entreprise non trouvée</h1>
        <p>L'entreprise demandée n'existe pas.</p>
        <Link to="/" className="btn btn-primary">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="decorative-line">{entreprise.nom}</h1>
      <div className="row">
        <div className="col-md-6">
          <p>{entreprise.specialite}</p>
          <p>{[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: i < entreprise.note ? '#f5c518' : '#ccc' }}>★</span>
          ))} ({entreprise.note}/5)</p>
          <p>{entreprise.ville}</p>
          {entreprise.site_web && (
            <p><a href={entreprise.site_web} target="_blank" rel="noopener noreferrer">{entreprise.site_web}</a></p>
          )}
          <p><strong>A propos :</strong> {entreprise.a_propos}</p>
        </div>
        <div className="col-md-6">
          <h2 className="decorative-line-green">Contacté l'artisan</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="prenom" className="form-label">Prénom</label>
              <input type="text" className="form-control" id="prenom" placeholder="Votre prénom" />
            </div>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">Nom</label>
              <input type="text" className="form-control" id="nom" placeholder="Votre nom" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Votre email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Votre message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EntrepriseDetail;