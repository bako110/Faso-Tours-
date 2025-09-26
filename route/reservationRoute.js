const express = require('express');
const router = express.Router();
const reservationController = require('../controller/reservationController');

// Créer une réservation
router.post('/', reservationController.create);
router.get('/', reservationController.getAll); // pour que l'admin récupère toutes les réservations

// Récupérer les réservations d’un utilisateur
router.get('/user/:userId', reservationController.getByUser);

// Récupérer une réservation par ID
router.get('/:id', reservationController.getById);

// Mettre à jour une réservation
router.put('/:id', reservationController.update);

// Supprimer une réservation
router.delete('/:id', reservationController.delete);

module.exports = router;
