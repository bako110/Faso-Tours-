const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// GET /api/users -> tous les utilisateurs
router.get('/', userController.getAllUsers);

// PUT /api/users/:id/toggle -> activer/désactiver
router.put('/:id/toggle', userController.toggleUserStatus);

module.exports = router;
