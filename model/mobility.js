const mongoose = require('mongoose');

const TransportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['taxi','bus','rental','electric','moto','traditional'], required: true },
  description: { type: String },
  features: [{ type: String }],
  priceRange: { type: String },
  contact: { type: String },
  image: { type: String },
  availability: { type: String, enum: ['24h/24','Jour uniquement','Sur réservation'] },
  destinations: [{ type: String }],
  capacity: { type: Number },
  eco: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Transport', TransportSchema);
