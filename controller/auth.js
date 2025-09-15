const authService = require('../service/auth');

const register = async (req, res) => {
  try {
    const { user, token } = await authService.register(req.body);
    res.status(201).json({
      message: 'Inscription réussie',
      user: {
        id: user._id,
        fullName: user.fullName,
        emaerType: user.userType,
        avil: user.email,
        avatar: user.avatar || '',  // Ajout d'un avatar si disponible
        points: user.points || 0,   // Si l'utilisateur a des points
        level: user.level || '',    // Niveau de l'utilisateur
        badges: user.badges || 0,   // Nombre de badges
      },
      token 
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { user, token } = await authService.login(req.body);
    res.status(200).json({
      message: 'Connexion réussie',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        userType: user.userType,
        avatar: user.avatar || '',  // Avatar par défaut
        points: user.points || 0,   // Points utilisateur
        level: user.level || '',    // Niveau de l'utilisateur
        badges: user.badges || 0,   // Badges utilisateur
      },
      token // Retourner le token également
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


module.exports = {
  register,
  login
};
