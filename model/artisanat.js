const mongoose = require('mongoose');

// ---------- ArtisanProfile ----------
const ArtisanProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  specialty: { type: String, required: true },
  location: { type: String, required: true },
  experience: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  description: { type: String, required: true },
  contact: { type: String, required: true },
  verified: { type: Boolean, default: false },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ArtisanProduct' }], // produits de l'artisan
  workshops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WorkshopEvent' }] // workshops donnés par l'artisan
}, { timestamps: true });

const ArtisanProfile = mongoose.model('ArtisanProfile', ArtisanProfileSchema);

// ---------- ArtisanProduct ----------
const ArtisanProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  artisan: { type: mongoose.Schema.Types.ObjectId, ref: 'ArtisanProfile', required: true }, // relation
  location: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, default: 0 },
  inStock: { type: Boolean, default: true },
  materials: [{ type: String }],
  techniques: [{ type: String }],
  culturalSignificance: { type: String }
}, { timestamps: true });

const ArtisanProduct = mongoose.model('ArtisanProduct', ArtisanProductSchema);

// ---------- WorkshopEvent ----------
const WorkshopEventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'ArtisanProfile', required: true }, // l'artisan qui donne le workshop
  location: { type: String, required: true },
  maxParticipants: { type: Number, required: true },
  currentParticipants: { type: Number, default: 0 },
  difficulty: { type: String, enum: ['Débutant', 'Intermédiaire', 'Avancé'], default: 'Débutant' },
  materials: [{ type: String }]
}, { timestamps: true });

const WorkshopEvent = mongoose.model('WorkshopEvent', WorkshopEventSchema);

// ---------- Export ----------
module.exports = {
  ArtisanProfile,
  ArtisanProduct,
  WorkshopEvent
};
