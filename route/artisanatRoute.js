// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controller/artisanatController');

// ---------------- WORKSHOPS ----------------
router.get('/workshops', adminController.listWorkshops);
router.post('/workshops', adminController.createWorkshop);
router.put('/workshops/:id', adminController.updateWorkshop);
router.delete('/workshops/:id', adminController.deleteWorkshop);

// ---------------- PRODUCTS ----------------
router.get('/products', adminController.listProducts);
router.post('/products', adminController.createProduct);
router.put('/products/:id', adminController.updateProduct);
router.delete('/products/:id', adminController.deleteProduct);

// ---------------- PROFILES ----------------
router.get('/profiles', adminController.listProfiles);
router.post('/profiles', adminController.createProfile);
router.put('/profiles/:id', adminController.updateProfile);
router.delete('/profiles/:id', adminController.deleteProfile);

module.exports = router;
