const express = require('express');
const router = express.Router();
const stateController = require('../controller/stateController');

// GET /api/states
router.get('/', stateController.getActiveStates);

module.exports = router;
