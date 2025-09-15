// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config(); // 🔐 Charge les variables d’environnement

const authRoutes = require('./route/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Exemple de route de test
app.get('/', (req, res) => {
  res.send('✅ API is running with MongoDB...');
});

// Connexion DB & démarrage serveur
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`);
  });
}).catch(err => {
  console.error('❌ Erreur de connexion MongoDB :', err.message);
  process.exit(1);
});
