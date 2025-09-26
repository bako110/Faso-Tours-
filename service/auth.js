const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

const JWT_SECRET = process.env.JWT_SECRET || 'une_chaine_secrete_super_secrete';

// ------------------ REGISTER ------------------
const register = async (userData) => {
  try {
    // Vérifier si l'email ou le téléphone existe déjà
    const existing = await User.findOne({ 
      $or: [
        { email: userData.email || null },
        { phone: userData.phone || null }
      ]
    });
    if (existing) {
      return { success: false, status: 400, error: 'Email ou téléphone déjà utilisé' };
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Avatar par défaut
    let avatar = userData.avatar;
    if (!avatar) {
      switch (userData.sex) {
        case 'male':
          avatar = 'assets/avatarHomme.jpg';
          break;
        case 'female':
          avatar = 'assets/avatarFemme.jpg';
          break;
        default:
          avatar = 'assets/avatarHomme.jpg';
      }
    }

    // Création utilisateur
    const user = new User({
      ...userData,
      password: hashedPassword,
      avatar,
    });

    const savedUser = await user.save();

    const payload = {
      id: savedUser._id,
      email: savedUser.email,
      phone: savedUser.phone,
      fullName: savedUser.fullName,
      userType: savedUser.userType,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });

    return { success: true, status: 201, user: savedUser, token };

  } catch (err) {
    console.error('Erreur register service:', err);
    return { success: false, status: 500, error: 'Erreur serveur' };
  }
};

// ------------------ LOGIN ------------------
const login = async ({ emailOrPhone, password }) => {
  try {
    if (!emailOrPhone || !password) {
      return { success: false, status: 400, error: 'Email/téléphone et mot de passe requis' };
    }

    // Chercher l'utilisateur par email ou téléphone
    const user = await User.findOne({
      $or: [
        { email: emailOrPhone },
        { phone: emailOrPhone }
      ]
    });

    if (!user) {
      return { success: false, status: 404, error: 'Utilisateur introuvable' };
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return { success: false, status: 401, error: 'Mot de passe incorrect' };
    }

    const payload = {
      id: user._id,
      email: user.email,
      phone: user.phone,
      fullName: user.fullName,
      userType: user.userType || 'client',
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });

    return { success: true, status: 200, user, token };

  } catch (err) {
    console.error('Erreur login service:', err);
    return { success: false, status: 500, error: 'Erreur serveur' };
  }
};

module.exports = { register, login };
