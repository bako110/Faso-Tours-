const express = require('express');
const router = express.Router();
const aiController = require('../controller/ai');

router.post('/ask', aiController.askAI);

module.exports = router;
