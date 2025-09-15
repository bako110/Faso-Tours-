const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/user');

const JWT_SECRET = process.env.JWT_SECRET || 'une_chaine_secrete_super_secrete'; // à mettre dans tes variables d'environnement

const register = async (userData) => {
  // Vérification si l'email est déjà utilisé
  const existing = await User.findOne({ email: userData.email });
  if (existing) throw new Error('Email déjà utilisé');

  // Hachage du mot de passe
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  // Définition de l'avatar par défaut selon le sexe
  let avatar;
  if (userData.avatar) {
    avatar = userData.avatar; // si utilisateur fournit un avatar
  } else {
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

  // Création d'un nouvel utilisateur
  const user = new User({
    ...userData,
    password: hashedPassword,
    avatar,
  });

  // Sauvegarde dans la base de données
  const savedUser = await user.save();

  // Génération du token JWT
  const payload = {
    id: savedUser._id,
    email: savedUser.email,
    fullName: savedUser.fullName,
    userType: savedUser.userType,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });

  return { user: savedUser, token };
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Utilisateur introuvable');

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('Mot de passe incorrect');

  // Génération du token JWT
  const payload = {
    id: user._id,
    email: user.email,
    fullName: user.fullName,
    userType: user.userType
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' }); // token valide 24h

  // Retourner l'utilisateur complet avec le token
  return { user, token };
};

module.exports = {
  register,
  login
};
