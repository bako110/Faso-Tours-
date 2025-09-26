const Photo = require('../model/gallery');

// Récupérer toutes les photos
exports.getAllPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().sort({ createdAt: -1 });
    res.json(photos);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur', error: err });
  }
};

// Ajouter une nouvelle photo
exports.addPhoto = async (req, res) => {
  try {
    const { title, url, category } = req.body;
    const newPhoto = new Photo({ title, url, category });
    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (err) {
    res.status(500).json({ message: 'Erreur ajout photo', error: err });
  }
};

// Supprimer une photo
exports.deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Photo.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Photo non trouvée' });
    res.json({ message: 'Photo supprimée' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur suppression photo', error: err });
  }
};
