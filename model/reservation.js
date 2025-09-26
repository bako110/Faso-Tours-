const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  itemId: { type: mongoose.Schema.Types.ObjectId, required: true },
  itemType: { 
    type: String, 
    enum: ['destination', 'hebergement', 'guide', 'evenement', 'restaurant', 'transport'], 
    required: true 
  },
  details: {
    nombrePersonnes: { type: Number, default: 1 },
    dateDebut: { type: Date },
    dateFin: { type: Date },
    autresInfos: { type: Object }
  },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  dateReservation: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reservation', ReservationSchema);
