const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: false },
  userType: { type: String, required: false },
  nationality: { type: String, required: false },
  email: { type: String, required: false, unique: true, sparse: true }, // email optionnel
  phone: { type: String, required: false, unique: true, sparse: true }, // téléphone optionnel et unique
  password: { type: String, required: true },
  avatar: { type: String, required: false, default: '' },  
  sex: { type: String, required: false, enum: ['male', 'female', 'other'] },  
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
