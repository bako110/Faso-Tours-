const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  photo: { type: String },
  specialites: { type: [String], default: [] },
  langues: { type: [String], default: [] },
  experience: { type: Number, default: 0 },
  note: { type: Number, default: 0 },
  nombreAvis: { type: Number, default: 0 },
  ville: { type: String, required: true },
  telephone: { type: String },
  email: { type: String },
  tarif: { type: Number, default: 0 },
  disponible: { type: Boolean, default: true },
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Guide', guideSchema);
