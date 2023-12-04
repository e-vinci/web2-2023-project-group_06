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
      console.log('Invalid email or password');
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

/* POST http://localhost:8070/api/login 500 (Internal Server Error)
eval @ LogInPage.js:13
asyncGeneratorStep @ LogInPage.js:5
_next @ LogInPage.js:6
eval @ LogInPage.js:6
eval @ LogInPage.js:6
handleLogin @ LogInPage.js:5
LogInPage.js:36 Error during login: Error: fetch error : 500 : Internal Server Error
    at HTMLFormElement.eval (LogInPage.js:22:15)
    at Generator.next (<anonymous>)
    at asyncGeneratorStep (LogInPage.js:5:103)
    at _next (LogInPage.js:6:194) */
