import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import EntreprisesList from './pages/EntreprisesList';
import EntrepriseDetail from './pages/EntrepriseDetail';
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';
import UnderConstruction from './pages/UnderConstruction';

function App() {
  return (
    <>
      <Header />
      <main class="container-fluid py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entreprises/:categoryId" element={<EntreprisesList />} />
          <Route path="/entreprise/:id" element={<EntrepriseDetail />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/legal/mentions" element={<UnderConstruction />} />
          <Route path="/legal/donnees-personnelles" element={<UnderConstruction />} />
          <Route path="/legal/accessibilite" element={<UnderConstruction />} />
          <Route path="/legal/cookies" element={<UnderConstruction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;