// routesUsers.js

const express = require('express');
const { createUser } = require('../models/users');

const router = express.Router();

router.post('/createUser', async (req, res) => {
  const {password, login} = req.body;

  try {
    const newUser = await createUser(password, login);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

module.exports = router;
