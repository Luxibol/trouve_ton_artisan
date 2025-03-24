import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import StarRating from "../components/StarRating";

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

  // Récupère les détails de l'entreprise depuis l'API lorsque l'ID change
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

  // Envoie les données du formulaire à l'API et gère les succès ou erreurs
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
      console.error('Erreur lors de l\'envoi du message:', error); // Ajout pour déboguer
      setFormStatus({ type: 'error', message: 'Erreur lors de l\'envoi du message.' });
    }
  };

  // Si les données de l'entreprise ne sont pas encore chargées, affiche un message de chargement
  if (!entreprise) {
    return <div className="container mt-5">Chargement...</div>;
  }

  // Si l'entreprise n'existe pas, affiche un message d'erreur avec un lien de retour
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
    <div className="container">
      {/* Première row: présentation de l'entreprise et image */}
      <div className="row mt-3 mt-md-4">
        {/* Colonne pour l'image de l'entreprise (6 colonnes) */}
        <div className="col-md-6 image-container pe-lg-5 pe-md-3">
          {entreprise.image_url && (
            <div className="mb-4">
              <img
                src={entreprise.image_url}
                alt={`${entreprise.nom} logo`}
                className="img-fluid rounded"
                style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>

        {/* Colonne pour la présentation de l'entreprise (6 colonnes) */}
        <div className="col-md-6 ps-lg-5 ps-md-3 pt-2">
          <h1 className="decorative-line">{entreprise.nom}</h1>
          <p>
            <em>{entreprise.specialite}</em>
          </p>
          <p><StarRating rating={entreprise.note || 0} /></p>
          <p>{entreprise.ville}</p>
          {entreprise.site_web && (
            <p><a href={entreprise.site_web} target="_blank" rel="noopener noreferrer">{entreprise.site_web}</a></p>
          )}
          <p><strong>A propos</strong></p>
          <p>{entreprise.a_propos}</p>
        </div>
      </div>

      {/* Deuxième row: formulaire de contact (prend toute la largeur) */}
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="decorative-line-green pb-3">Contacter {entreprise.nom}</h2>
          {formStatus && (
            <div className={`alert alert-${formStatus.type === 'success' ? 'success' : 'danger'} mt-3`}>
              {formStatus.message}
            </div>
          )}
          {/* Formulaire pour contacter l'entreprise */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="prenom" className="form-label">
                Prénom<span className='text-danger'>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="prenom"
                value={formData.prenom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                Nom<span className='text-danger'>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="nom"
                value={formData.nom}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email<span className='text-danger'>*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Votre demande<span className='text-danger'>*</span>
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mt-4">
              <p className="text-muted">
                En soumettant ce formulaire, vous acceptez que vos données personnelles soient utilisées pour répondre à votre demande, conformément à notre <Link to="/politique-de-confidentialite">politique de confidentialité</Link>.
              </p>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EntrepriseDetail;
