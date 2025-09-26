const reservationService = require('../service/reservationService');

class ReservationController {

  async create(req, res) {
    try {
      const reservation = await reservationService.createReservation(req.body);
      res.status(201).json(reservation);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getByUser(req, res) {
    try {
      const reservations = await reservationService.getReservationsByUser(req.params.userId);
      res.json(reservations);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const reservation = await reservationService.getReservationById(req.params.id);
      if (!reservation) return res.status(404).json({ error: 'Réservation non trouvée' });
      res.json(reservation);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const reservation = await reservationService.updateReservation(req.params.id, req.body);
      res.json(reservation);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      await reservationService.deleteReservation(req.params.id);
      res.json({ message: 'Réservation supprimée avec succès' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // 🔹 Méthode pour récupérer toutes les réservations (admin)
  async getAll(req, res) {
    try {
      const reservations = await reservationService.getAllReservations();
      res.status(200).json(reservations);
    } catch (err) {
      console.error('Erreur getAll reservations:', err);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  }
}

module.exports = new ReservationController();
