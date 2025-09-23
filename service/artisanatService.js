const { WorkshopEvent, ArtisanProduct, ArtisanProfile } = require('../model/artisanat');

// ---------- WORKSHOPS ----------
const getAllWorkshops = () => WorkshopEvent.find().populate('instructor');
const getWorkshopById = (id) => WorkshopEvent.findById(id).populate('instructor');

const createWorkshop = async (data) => {
  // Créer le workshop
  const workshop = await WorkshopEvent.create(data);

  // Ajouter le workshop à l'artisan
  await ArtisanProfile.findByIdAndUpdate(
    data.instructor,
    { $push: { workshops: workshop._id } },
    { new: true }
  );

  return workshop;
};

const updateWorkshop = (id, data) => WorkshopEvent.findByIdAndUpdate(id, data, { new: true });

const deleteWorkshop = async (id) => {
  const workshop = await WorkshopEvent.findById(id);
  if (!workshop) throw new Error('Workshop not found');

  // Supprimer le workshop de l'artisan
  await ArtisanProfile.findByIdAndUpdate(workshop.instructor, { $pull: { workshops: id } });

  return WorkshopEvent.findByIdAndDelete(id);
};

const addParticipant = async (id) => {
  const workshop = await WorkshopEvent.findById(id);
  if (!workshop) throw new Error('Workshop not found');
  if (workshop.currentParticipants >= workshop.maxParticipants) {
    throw new Error('Maximum participants reached');
  }
  workshop.currentParticipants += 1;
  return workshop.save();
};

// ---------- PRODUCTS ----------
const getAllProducts = () => ArtisanProduct.find().populate('artisan');
const getProductById = (id) => ArtisanProduct.findById(id).populate('artisan');

const createProduct = async (data) => {
  const product = await ArtisanProduct.create(data);

  // Ajouter le produit à l'artisan
  await ArtisanProfile.findByIdAndUpdate(
    data.artisan,
    { $push: { products: product._id } },
    { new: true }
  );

  return product;
};

const updateProduct = (id, data) => ArtisanProduct.findByIdAndUpdate(id, data, { new: true });

const deleteProduct = async (id) => {
  const product = await ArtisanProduct.findById(id);
  if (!product) throw new Error('Product not found');

  // Supprimer le produit de l'artisan
  await ArtisanProfile.findByIdAndUpdate(product.artisan, { $pull: { products: id } });

  return ArtisanProduct.findByIdAndDelete(id);
};

// ---------- PROFILES ----------
const getAllProfiles = () => ArtisanProfile.find().populate('products').populate('workshops');
const getProfileById = (id) => ArtisanProfile.findById(id).populate('products').populate('workshops');

const createProfile = (data) => ArtisanProfile.create(data);
const updateProfile = (id, data) => ArtisanProfile.findByIdAndUpdate(id, data, { new: true });

const deleteProfile = async (id) => {
  const profile = await ArtisanProfile.findById(id);
  if (!profile) throw new Error('Profile not found');

  // Supprimer tous les produits liés
  await ArtisanProduct.deleteMany({ artisan: id });
  // Supprimer tous les workshops liés
  await WorkshopEvent.deleteMany({ instructor: id });

  return ArtisanProfile.findByIdAndDelete(id);
};

// ---------- EXPORT SERVICE ----------
module.exports = {
  // Workshops
  getAllWorkshops,
  getWorkshopById,
  createWorkshop,
  updateWorkshop,
  deleteWorkshop,
  addParticipant,
  // Products
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  // Profiles
  getAllProfiles,
  getProfileById,
  createProfile,
  updateProfile,
  deleteProfile
};
