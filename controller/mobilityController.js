const Transport = require('../model/mobility');

// Lire tous les transports
exports.getAll = async (req, res) => {
  try {
    const transports = await Transport.find();
    res.json(transports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Ajouter un transport
exports.create = async (req, res) => {
  try {
    const transport = new Transport(req.body);
    const saved = await transport.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Mettre à jour un transport
exports.update = async (req, res) => {
  try {
    const updated = await Transport.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Supprimer un transport
exports.delete = async (req, res) => {
  try {
    await Transport.findByIdAndDelete(req.params.id);
    res.json({ message: 'Transport supprimé' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
