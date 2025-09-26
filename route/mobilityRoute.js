const express = require('express');
const router = express.Router();
const transportController = require('../controller/mobilityController');

router.get('/', transportController.getAll);
router.post('/', transportController.create);
router.put('/:id', transportController.update);
router.delete('/:id', transportController.delete);

module.exports = router;
