const express = require('express');
const router = express.Router();
const destinationController = require('../controller/destinationController');

// CRUD Destinations
router.get('/', destinationController.getDestinations);
router.get('/:id', destinationController.getDestination);
router.post('/', destinationController.createDestination);
router.put('/:id', destinationController.updateDestination);
router.delete('/:id', destinationController.deleteDestination);

module.exports = router;
