const Destination = require('../model/destination');

const getAllDestinations = async () => {
  return await Destination.find();
};

const getDestinationById = async (id) => {
  return await Destination.findById(id);
};

const createDestination = async (data) => {
  const newDest = new Destination(data);
  return await newDest.save();
};

const updateDestination = async (id, data) => {
  return await Destination.findByIdAndUpdate(id, data, { new: true });
};

const deleteDestination = async (id) => {
  return await Destination.findByIdAndDelete(id);
};

module.exports = {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination
};
