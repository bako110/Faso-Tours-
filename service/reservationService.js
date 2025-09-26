const Reservation = require('../model/reservation');

class ReservationService {

  async createReservation(data) {
    const reservation = new Reservation(data);
    return await reservation.save();
  }

  async getReservationsByUser(userId) {
    return await Reservation.find({ userId }).populate('userId', 'name email');
  }

  async getReservationById(id) {
    return await Reservation.findById(id).populate('userId', 'name email');
  }

  async updateReservation(id, data) {
    return await Reservation.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteReservation(id) {
    return await Reservation.findByIdAndDelete(id);
  }

  // 🔹 Méthode pour récupérer toutes les réservations (admin)
  async getAllReservations() {
    return await Reservation.find().populate('userId', 'fullName email'); // populate si tu veux afficher le nom/email du client
  }
}

module.exports = new ReservationService();
