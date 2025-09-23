const User = require('../model/user');
const Destination = require('../model/destination');

const getActiveUsers = async () => {
  return await User.countDocuments({ isActive: true }); // renvoie un nombre
};

const getAllDestinations = async () => {
  return await Destination.countDocuments({}); // renvoie un nombre
};

module.exports = {
  getActiveUsers,
  getAllDestinations
};
