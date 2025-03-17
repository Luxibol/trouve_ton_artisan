import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import EntreprisesList from './pages/EntreprisesList';
import EntrepriseDetail from './pages/EntrepriseDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entreprises/:categoryId" element={<EntreprisesList />} />
          <Route path="/entreprise/:id" element={<EntrepriseDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;