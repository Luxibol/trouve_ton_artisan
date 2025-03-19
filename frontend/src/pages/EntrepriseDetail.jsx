import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function EntrepriseDetail() {
  const { id } = useParams();
  const [entreprise, setEntreprise] = useState(null);
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log('Données de l\'entreprise:', data);
        setEntreprise(data);
      })
      .catch(err => console.error('Erreur lors de la récupération des détails de l\'entreprise:', err));
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(null); // Réinitialise le statut
    try {
      const response = await fetch(`http://localhost:5000/api/contact/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setFormStatus({ type: 'success', message: 'Message envoyé avec succès !' });
        setFormData({ prenom: '', nom: '', email: '', message: '' }); // Réinitialise le formulaire
      } else {
        setFormStatus({ type: 'error', message: result.message || 'Erreur lors de l\'envoi.' });
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Erreur lors de l\'envoi du message.' });
    }
  };

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
          <p><strong>A propos</strong> {entreprise.a_propos}</p>
          <Link to="/" className="btn btn-primary mt-3">Retour à l'accueil</Link>
        </div>
        <div className="col-md-6">
          {entreprise.image_url && (
            <div className="mb-4">
              <img
                src={entreprise.image_url}
                alt={`${entreprise.nom} logo`}
                className="img-fluid rounded"
                style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
          <h2 className="decorative-line-green">Contacter {entreprise.nom}</h2>
          {formStatus && (
            <div className={`alert alert-${formStatus.type === 'success' ? 'success' : 'danger'} mt-3`}>
              {formStatus.message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="prenom" className="form-label">Prénom</label>
              <input
                type="text"
                className="form-control"
                id="prenom"
                placeholder="Votre prénom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">Nom</label>
              <input
                type="text"
                className="form-control"
                id="nom"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EntrepriseDetail;