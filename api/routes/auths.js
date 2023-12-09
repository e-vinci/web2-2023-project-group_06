const express = require('express');
const { register, login } = require('../models/users');
const jwt = require('jsonwebtoken');

const router = express.Router();
const jwtSecret = 'ilovemypizza!'; // Changez ceci pour votre propre clé secrète
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
    { expiresIn: lifetimeJwt }
  );

  return res.json({ user: authenticatedUser, token });
});

/* Login a user */
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = login(username, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  const token = jwt.sign(
    { username },
    jwtSecret,
    { expiresIn: lifetimeJwt }
  );

  return res.json({ user: authenticatedUser, token });
});

module.exports = router;
