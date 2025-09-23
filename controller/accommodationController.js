const AccommodationService = require("../service/accommodationService");

class AccommodationController {
  async getAll(req, res) {
    try {
      const page = parseInt(req.query.page) || 0;
      const size = parseInt(req.query.size) || 10;
      const data = await AccommodationService.getAll(page, size);
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: "Erreur serveur", details: err.message });
    }
  }

  async getById(req, res) {
    try {
      const accommodation = await AccommodationService.getById(req.params.id);
      if (!accommodation) return res.status(404).json({ error: "Non trouvé" });
      res.json(accommodation);
    } catch (err) {
      res.status(500).json({ error: "Erreur serveur", details: err.message });
    }
  }

  async create(req, res) {
    try {
      const accommodation = await AccommodationService.create(req.body);
      res.status(201).json(accommodation);
    } catch (err) {
      res.status(400).json({ error: "Erreur de création", details: err.message });
    }
  }

  async update(req, res) {
    try {
      const accommodation = await AccommodationService.update(req.params.id, req.body);
      if (!accommodation) return res.status(404).json({ error: "Non trouvé" });
      res.json(accommodation);
    } catch (err) {
      res.status(400).json({ error: "Erreur de mise à jour", details: err.message });
    }
  }

  async delete(req, res) {
    try {
      const accommodation = await AccommodationService.delete(req.params.id);
      if (!accommodation) return res.status(404).json({ error: "Non trouvé" });
      res.json({ message: "Supprimé avec succès" });
    } catch (err) {
      res.status(500).json({ error: "Erreur serveur", details: err.message });
    }
  }
}

module.exports = new AccommodationController();
