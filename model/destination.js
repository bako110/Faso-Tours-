const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  category: { type: String, required: true },
  rating: { type: Number, default: 0 },
  visitDuration: { type: String },
  bestSeason: { type: String },
  activities: [{ type: String }],
  coordinates: { type: String },
  highlights: [{ type: String }],
  price: { type: String },
  difficulty: { type: String, enum: ['Facile', 'Modéré', 'Difficile'], default: 'Facile' },
  isFavorite: { type: Boolean, default: false },
  views: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Destination', DestinationSchema);
