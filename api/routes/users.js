const express = require('express');
const bcrypt = require('bcrypt');
const { createUser } = require('../models/users');

const router = express.Router();

router.post('/createUser', async (req, res) => {
  const { password, login } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await createUser(hashedPassword, login);

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
