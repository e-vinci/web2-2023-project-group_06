const express = require('express');
const bcrypt = require('bcrypt');
const { createUser } = require('../models/users');

const router = express.Router();

router.post('/createUser', async (req, res) => {
  const { login, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Vérifie si l'utilisateur existe déjà avant de le créer
    const newUser = await createUser(login, hashedPassword);
    res.status(201).json(newUser);
  } catch (error) {
    if (error.message === 'Cet email est déjà assigné à un compte.') {
      res.status(400).json({ error: error.message });
    } else {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  }
});

module.exports = router;
