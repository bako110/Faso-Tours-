const destinationService = require('../service/destinationService');

const getDestinations = async (req, res) => {
  try {
    const destinations = await destinationService.getAllDestinations();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors du chargement des destinations.' });
  }
};

const getDestination = async (req, res) => {
  try {
    const dest = await destinationService.getDestinationById(req.params.id);
    if (!dest) return res.status(404).json({ error: 'Destination non trouvée.' });
    res.json(dest);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur.' });
  }
};

const createDestination = async (req, res) => {
  try {
    const newDest = await destinationService.createDestination(req.body);
    res.status(201).json(newDest);
  } catch (err) {
    res.status(500).json({ error: 'Impossible de créer la destination.' });
  }
};

const updateDestination = async (req, res) => {
  try {
    const updatedDest = await destinationService.updateDestination(req.params.id, req.body);
    if (!updatedDest) return res.status(404).json({ error: 'Destination non trouvée.' });
    res.json(updatedDest);
  } catch (err) {
    res.status(500).json({ error: 'Impossible de mettre à jour la destination.' });
  }
};

const deleteDestination = async (req, res) => {
  try {
    const deleted = await destinationService.deleteDestination(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Destination non trouvée.' });
    res.json({ message: 'Destination supprimée avec succès.' });
  } catch (err) {
    res.status(500).json({ error: 'Impossible de supprimer la destination.' });
  }
};

module.exports = {
  getDestinations,
  getDestination,
  createDestination,
  updateDestination,
  deleteDestination
};
