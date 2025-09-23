const adminService = require('../service/artisanatService');

// ---------------- WORKSHOPS ----------------
const listWorkshops = async (req, res) => {
  try {
    const workshops = await adminService.getAllWorkshops(); // déjà populate instructor
    res.json(workshops);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createWorkshop = async (req, res) => {
  try {
    const workshop = await adminService.createWorkshop(req.body); // ajoute l’atelier à l’artisan
    res.status(201).json(workshop);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateWorkshop = async (req, res) => {
  try {
    const updated = await adminService.updateWorkshop(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Workshop not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteWorkshop = async (req, res) => {
  try {
    const deleted = await adminService.deleteWorkshop(req.params.id); // supprime le workshop de l’artisan
    if (!deleted) return res.status(404).json({ error: 'Workshop not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---------------- PRODUCTS ----------------
const listProducts = async (req, res) => {
  try {
    const products = await adminService.getAllProducts(); // populate artisan
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await adminService.createProduct(req.body); // ajoute produit à l’artisan
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updated = await adminService.updateProduct(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Product not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deleted = await adminService.deleteProduct(req.params.id); // supprime du profil artisan
    if (!deleted) return res.status(404).json({ error: 'Product not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---------------- PROFILES ----------------
const listProfiles = async (req, res) => {
  try {
    const profiles = await adminService.getAllProfiles(); // populate products & workshops
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createProfile = async (req, res) => {
  try {
    const profile = await adminService.createProfile(req.body);
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateProfile = async (req, res) => {
  try {
    const updated = await adminService.updateProfile(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Profile not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteProfile = async (req, res) => {
  try {
    const deleted = await adminService.deleteProfile(req.params.id); // supprime produits & workshops
    if (!deleted) return res.status(404).json({ error: 'Profile not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ---------------- EXPORT ----------------
module.exports = {
  // Workshops
  listWorkshops,
  createWorkshop,
  updateWorkshop,
  deleteWorkshop,
  // Products
  listProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  // Profiles
  listProfiles,
  createProfile,
  updateProfile,
  deleteProfile
};
