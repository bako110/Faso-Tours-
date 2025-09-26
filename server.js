// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const eventRoutes = require('./route/eventRoute'); // <-- import des routes events
const destinationRoutes = require('./route/destinationRoute');
const accommodationRoutes = require('./route/accommodationRoute');
const userRoutes = require('./route/userRoute');
const stateRoutes = require('./route/stateRoute');
const artisanatRoutes = require('./route/artisanatRoute');
const GuideRoutes = require('./route/guideRoute');
const structureRoutes = require('./route/structureRoute');
const mobilityRoutes = require('./route/mobilityRoute');
const galleryRoutes = require('./route/galleryRoute');
const reservationRoutes = require('./route/reservationRoute');

const authRoutes = require('./route/auth');
const aiRoutes = require('./route/ai');

dotenv.config(); // 🔐 Charge les variables d’environnement

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/api/events', eventRoutes); 
app.use('/api/accommodations', accommodationRoutes);
app.use('/api/users', userRoutes);
app.use('/api/state', stateRoutes);
app.use('/api/artisanat', artisanatRoutes);
app.use('/api/guides', GuideRoutes);
app.use('/api/structures', structureRoutes);
app.use('/api/mobility', mobilityRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/reservations', reservationRoutes);

// Exemple de route de test
app.get('/', (req, res) => {
  res.send('✅ API is running with MongoDB...');
});

// Connexion DB & démarrage serveur
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server started on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Erreur de connexion MongoDB :', err.message);
    process.exit(1);
  });
