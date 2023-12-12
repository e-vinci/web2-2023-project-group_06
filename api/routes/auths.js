/* eslint-disable no-console */
const express = require('express');
const jwt = require('jsonwebtoken');
const { register, login } = require('../models/users');

const router = express.Router();
const jwtSecret = 'jwtSecret!'; // Changez ceci pour votre propre clé secrète
const lifetimeJwt = 24 * 60 * 60; // en secondes : 24 * 60 * 60 = 24h

/* Register a user */
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = register(username, password);

  if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

  const token = jwt.sign(
    { username },
    jwtSecret,
    { expiresIn: lifetimeJwt },
  );

  return res.json({ user: authenticatedUser, token });
});

/* Login a user */
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = await login(username, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  const token = jwt.sign(
    { username },
    jwtSecret,
    { expiresIn: lifetimeJwt },
  );

  console.log('User logged in:', authenticatedUser);
  console.log('Generated token:', token);

  return res.json({ user: authenticatedUser, token });
});

module.exports = router;
