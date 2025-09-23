const User = require('../model/user');

// Récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur', details: err.message });
  }
};

// Activer / désactiver un utilisateur
exports.toggleUserStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Utilisateur non trouvé' });

    user.isActive = !user.isActive;
    await user.save();

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur', details: err.message });
  }
};
