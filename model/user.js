const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: false },
  userType: { type: String, required: false },
  nationality: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, required: false, default: '' },  // Champ avatar (optionnel)
  sex: { type: String, required: false, enum: ['male', 'female', 'other'] },  // Champ sexe
  isActive: { type: Boolean, default: true } // Champ pour activer/désactiver l'utilisateur
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
