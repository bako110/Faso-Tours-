const express = require('express');
const router = express.Router();
const structureController = require('../controller/structureController');

// Routes CRUD
router.get('/', structureController.getAll);
router.get('/:id', structureController.getById);
router.post('/', structureController.create);
router.put('/:id', structureController.update);
router.delete('/:id', structureController.delete);

module.exports = router;
