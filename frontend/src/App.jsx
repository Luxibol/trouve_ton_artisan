import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Page d'accueil (à venir)</div>} />
        <Route path="/entreprises/:categoryId" element={<div>Liste des entreprises (à venir)</div>} />
        <Route path="/entreprise/:id" element={<div>Détails de l'entreprise (à venir)</div>} />
      </Routes>
    </div>
  );
}

export default App;