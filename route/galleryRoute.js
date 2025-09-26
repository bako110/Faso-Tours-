const express = require('express');
const router = express.Router();
const photoController = require('../controller/galleryController');

router.get('/', photoController.getAllPhotos);
router.post('/', photoController.addPhoto);
router.delete('/:id', photoController.deletePhoto);

module.exports = router;
