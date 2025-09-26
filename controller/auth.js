const authService = require('../service/auth');

// ------------------ REGISTER ------------------
const register = async (req, res) => {
  try {
    const { user, token, success, status, error } = await authService.register(req.body);

    if (!success) {
      return res.status(status).json({ error });
    }

    res.status(201).json({
      message: 'Inscription réussie',
      user: {
        id: user._id,
        fullName: user.fullName,
        userType: user.userType,
        email: user.email,
        avatar: user.avatar || '',  // Avatar par défaut
        points: user.points || 0,   // Points utilisateur
        level: user.level || '',    // Niveau
        badges: user.badges || 0,   // Nombre de badges
        sex: user.sex || '',        // Sexe
        phone: user.phone || '',    // Téléphone si disponible
      },
      token
    });
  } catch (err) {
    console.error('Erreur register controller:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

// ------------------ LOGIN ------------------
const login = async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;  // ⚠️ ici on accepte email ou téléphone
    const result = await authService.login({ emailOrPhone, password });

    if (!result.success) {
      return res.status(result.status).json({ error: result.error });
    }

    const { user, token } = result;

    res.status(200).json({
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone || '',
        avatar: user.avatar || '',
        userType: user.userType || '',
        sex: user.sex || '',
      },
      token
    });

  } catch (err) {
    console.error('Erreur login controller:', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};

module.exports = {
  register,
  login
};
