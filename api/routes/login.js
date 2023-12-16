/* eslint-disable no-console */
const express = require('express');

const login = require('../models/login');

const router = express.Router();

router.post('/', async (req, res) => {
  console.log('routes USERS LOGIN');

  const { email, password } = req.body;

  console.log(`routes HERE it's the user email: ${email}`);
  console.log(`routes HERE it's the user password: ${password}`);

  try {
    const authenticatedUser = await login.login(email, password);

    console.log('routes Authenticated User:', authenticatedUser);

    res.status(200).json(authenticatedUser);
  } catch (error) {
    console.error('routes Error during login:', error.message);
    console.error(error.stack);

    res.status(401).json({
      error: 'Invalid credentials',
      field: 'general',
    });
  }
});

module.exports = router;
// mdp hashé = Azertyui1_
