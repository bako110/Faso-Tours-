const express = require('express');
const router = express.Router();
const guideController = require('../controller/guideController');

// CRUD guides
router.get('/', guideController.getGuides);               // GET tous les guides
router.post('/', guideController.createGuide);            // POST créer guide
router.put('/:id', guideController.updateGuide);          // PUT modifier guide
router.delete('/:id', guideController.deleteGuide);       // DELETE guide
router.patch('/:id/toggle', guideController.toggleDisponibilite); // PATCH toggle dispo

module.exports = router;
