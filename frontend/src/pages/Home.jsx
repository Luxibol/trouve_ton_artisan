import Card from '../components/Card';

function Home() {
  const topEntreprises = [
    { name: 'Plomberie Dupont', rating: 5, specialty: 'Plomberie', location: 'Paris' },
    { name: 'Électricité Martin', rating: 4, specialty: 'Électricité', location: 'Lyon' },
  ];

  return (
    <div>
      <h1 className="decorative-line">Comment trouver mon artisan ?</h1>
      <ol>
        <li>Choisir la catégorie d'artisanat dans le menu.</li>
        <li>Choisir un artisan.</li>
        <li>Le contacter via le formulaire de contact.</li>
        <li>Une réponse sera apportée sous 48h.</li>
      </ol>
      <h2 className="decorative-line-green mt-5">Top du mois</h2>
      <div className="row">
        {topEntreprises.map((entreprise, index) => (
          <Card key={index} {...entreprise} />
        ))}
      </div>
    </div>
  );
}

export default Home;