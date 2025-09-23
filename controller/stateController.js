const stateService = require('../service/stateService');

const getActiveStates = async (req, res) => {
  try {
    const usersCount = await stateService.getActiveUsers();         // nombre d'utilisateurs actifs
    const destinationsCount = await stateService.getAllDestinations(); // nombre de destinations

    res.status(200).json({
      usersCount,
      destinationsCount
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Erreur serveur lors de la récupération des états'
    });
  }
};

module.exports = {
  getActiveStates
};
