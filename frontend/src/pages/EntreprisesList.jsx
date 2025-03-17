import { useParams } from 'react-router-dom';
import Card from '../components/Card';

function EntreprisesList() {
  const { categoryId } = useParams();
  const entreprises = [
    { name: 'Entreprise 1', rating: 5, specialty: categoryId, location: 'Marseille' },
    { name: 'Entreprise 2', rating: 4, specialty: categoryId, location: 'Bordeaux' },
  ];

  return (
    <div>
      <h1 className="decorative-line">{categoryId}</h1>
      <div className="row">
        {entreprises.map((entreprise, index) => (
          <Card key={index} {...entreprise} />
        ))}
      </div>
    </div>
  );
}

export default EntreprisesList;