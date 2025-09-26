const Guide = require('../model/guide');

// Créer un guide
exports.createGuide = async (data) => {
  const guide = new Guide(data);
  return await guide.save();
};

// Lister tous les guides
exports.getGuides = async () => {
  return await Guide.find();
};

// Mettre à jour un guide
exports.updateGuide = async (id, data) => {
  return await Guide.findByIdAndUpdate(id, data, { new: true });
};

// Supprimer un guide
exports.deleteGuide = async (id) => {
  return await Guide.findByIdAndDelete(id);
};

// Désactiver / Activer un guide
exports.toggleDisponibilite = async (id) => {
  const guide = await Guide.findById(id);
  if (!guide) throw new Error('Guide introuvable');
  guide.disponible = !guide.disponible;
  return await guide.save();
};
