const mongoose = require('mongoose');

const structureSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  category: { type: String, enum: ['hospitality','transport','services','technology','others'], default: 'hospitality' },
  partnership: { type: String, enum: ['gold','silver','bronze'], default: 'bronze' },
  location: { type: String, required: true },
  employees: { type: Number, default: 0 },
  since: { type: Number, default: new Date().getFullYear() },
  services: [{ type: String }],
  image: { type: String },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Structure', structureSchema);
