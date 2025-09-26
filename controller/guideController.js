const guideService = require('../service/guideService');

// Créer un guide
exports.createGuide = async (req, res) => {
  try {
    const guide = await guideService.createGuide(req.body);
    res.status(201).json(guide);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lister tous les guides
exports.getGuides = async (req, res) => {
  try {
    const guides = await guideService.getGuides();
    res.json(guides);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour un guide
exports.updateGuide = async (req, res) => {
  try {
    const guide = await guideService.updateGuide(req.params.id, req.body);
    res.json(guide);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer un guide
exports.deleteGuide = async (req, res) => {
  try {
    await guideService.deleteGuide(req.params.id);
    res.json({ message: 'Guide supprimé' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Désactiver / Activer un guide
exports.toggleDisponibilite = async (req, res) => {
  try {
    const guide = await guideService.toggleDisponibilite(req.params.id);
    res.json(guide);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
