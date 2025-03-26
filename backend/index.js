const app = require('./app');

const PORT = process.env.PORT || 5000;

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});
