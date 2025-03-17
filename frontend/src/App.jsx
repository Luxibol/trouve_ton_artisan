import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<div>Page d'accueil (à venir)</div>} />
          <Route path="/entreprises/:categoryId" element={<div>Liste des entreprises (à venir)</div>} />
          <Route path="/entreprise/:id" element={<div>Détails de l'entreprise (à venir)</div>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;