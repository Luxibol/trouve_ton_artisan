import { useParams } from 'react-router-dom';

function EntrepriseDetail() {
  const { id } = useParams();

  const entreprises = {
    1: { name: 'Plomberie Dupont', specialty: 'Plomberie', rating: 5, location: 'Paris', about: 'Spécialiste en plomberie depuis 10 ans.', website: 'https://plomberiedupont.fr' },
    2: { name: 'Électricité Martin', specialty: 'Électricité', rating: 4, location: 'Lyon', about: 'Expert en installations électriques.', website: 'https://electricitemartin.fr' },
    3: { name: 'Menuiserie Lefèvre', specialty: 'Menuiserie', rating: 5, location: 'Marseille', about: 'Fabrication sur mesure de meubles.', website: null },
};

  const entreprise = { name: `Entreprise ${id}`, specialty: 'Plomberie', rating: 5, location: 'Paris', about: 'Description de l\'entreprise.', website: 'https://example.com' };

  const renderStars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <div>
      <h1 className="decorative-line">{entreprise.name}</h1>
      <div className="row">
        <div className="col-md-6">
          <p>{entreprise.specialty}</p>
          <p>
            <span className="stars">{renderStars(entreprise.rating)}</span> ({entreprise.rating}/5)
          </p>
          <p>{entreprise.location}</p>
          {entreprise.website && <p>Site : <a href={entreprise.website}>{entreprise.website}</a></p>}
          <p>À propos : {entreprise.about}</p>
        </div>
        <div className="col-md-6">
          <h2 className="decorative-line-green">Nous contacter</h2>
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