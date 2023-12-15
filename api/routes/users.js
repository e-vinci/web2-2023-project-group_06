const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser } = require('../models/users');

const jwtSecret = 'jwtSecret!';

const router = express.Router();

router.post('/createUser', async (req, res) => {
  const {
    login, password, name, surname,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Vérifie si l'utilisateur existe déjà avant de le créer
    const newUser = await createUser(login, hashedPassword, name, surname);

    // Si l'utilisateur est créé avec succès
    if (newUser) {
      // Génération du token JWT
      const token = jwt.sign({ login }, jwtSecret);

      // Envoi du token et des données de l'utilisateur
      res.status(201).json({ token, user: newUser });
    } else {
      // Si l'utilisateur existe déjà
      res.status(400).json({ error: 'Cet email est déjà assigné à un compte.' });
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
