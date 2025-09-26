const structureService = require('../service/structureService');

class StructureController {
  async getAll(req, res) {
    try {
      const structures = await structureService.getAll();
      res.json(structures);
    } catch (err) {
      res.status(500).json({ error: 'Erreur serveur', details: err.message });
    }
  }

  async getById(req, res) {
    try {
      const structure = await structureService.getById(req.params.id);
      if (!structure) return res.status(404).json({ error: 'Structure non trouvée' });
      res.json(structure);
    } catch (err) {
      res.status(500).json({ error: 'Erreur serveur', details: err.message });
    }
  }

  async create(req, res) {
    try {
      const newStructure = await structureService.create(req.body);
      res.status(201).json(newStructure);
    } catch (err) {
      res.status(400).json({ error: 'Erreur lors de la création', details: err.message });
    }
  }

  async update(req, res) {
    try {
      const updatedStructure = await structureService.update(req.params.id, req.body);
      if (!updatedStructure) return res.status(404).json({ error: 'Structure non trouvée' });
      res.json(updatedStructure);
    } catch (err) {
      res.status(400).json({ error: 'Erreur lors de la mise à jour', details: err.message });
    }
  }

  async delete(req, res) {
    try {
      const deleted = await structureService.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Structure non trouvée' });
      res.json({ message: 'Structure supprimée avec succès' });
    } catch (err) {
      res.status(500).json({ error: 'Erreur serveur', details: err.message });
    }
  }
}

module.exports = new StructureController();
