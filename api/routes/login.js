/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable no-console */
const express = require('express');

const loginUser = require('../models/login');

const router = express.Router();

router.post('/', async (req, res) => {
  console.log('USERS LOGIN');

  const { email, password } = req.body;

  console.log(`HERE it's the user email: ${email}`);
  console.log(`HERE it's the user password: ${password}`);

  try {
    const userFound = await loginUser.loginUser(email, password);

    console.log(`User found: ${JSON.stringify(userFound)}`);

    if (userFound.length > 0) {
      console.log('Password correct');
      res.status(200).json(userFound);
    } else {
      console.log('Invalid email or password2');
      res.status(401).json({ error: 'Invalid credentials', field: 'email' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    console.error(error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
