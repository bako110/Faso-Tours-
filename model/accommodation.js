// models/Accommodation.js
const mongoose = require('mongoose');

const AccommodationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // ex: "guesthouse", "hotel", "bnb"
  location: { type: String, required: true }, // ville
  fullAddress: { type: String },
  price: { type: Number, required: true }, // prix par nuit
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
  availability: { type: Number, default: 0 }, // nombre de chambres disponibles
  checkIn: { type: String }, // ex: "14:00"
  checkOut: { type: String }, // ex: "11:00"
  description: { type: String },

  photos: [{ type: String }], // URLs ou chemins des photos
  highlights: [{ type: String }], // points forts
  rooms: [{ type: mongoose.Schema.Types.Mixed }], // liste de chambres avec détails personnalisés
  amenitiesByCategory: [{ type: mongoose.Schema.Types.Mixed }], // catégories d'équipements
  ratingCategories: [{ type: mongoose.Schema.Types.Mixed }], // notes par catégorie
  reviewsList: [{ type: mongoose.Schema.Types.Mixed }], // liste détaillée des avis
  nearbyAttractions: [{ type: String }], // attractions proches
  transportOptions: [{ type: String }], // options de transport
  coordinates: {
    lat: { type: Number },
    lng: { type: Number }
  }
}, { timestamps: true });

module.exports = mongoose.model('Accommodation', AccommodationSchema);
