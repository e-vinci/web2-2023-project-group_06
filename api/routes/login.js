/* eslint-disable no-console */
const express = require('express');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const jwtSecret = 'ilovebooks!';

const lifetimeJwt = 30; // a changer apres, la c est que 30 sec

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

    // j'ai rajouté ici dans la condition userFound && (chuqi)
    if (userFound && userFound.length !== undefined) {
      const userName = userFound[0].login;
      const hashedPassword = userFound[0].password;
      const token = jwt.sign({ userName, hashedPassword }, jwtSecret, { expiresIn: lifetimeJwt });
      console.log(`Stored hashed password: ${hashedPassword}`);
      console.log(`password value: ${password}`);

      if (bcrypt.compareSync(password, hashedPassword)) {
        console.log('password correct');
        if (userFound[0].is_admin === true) {
          console.log('IS ADMIN');
        }
        console.log(`token ............${token}`); // ici tu peux voir le token genere et si tu vas sur jwt.io et que tu rentres le token genere tu peux voir que c est les bonnes infos

        res.status(200).json({ token, userFound, hashedPassword });
      } else {
        console.log('Invalid password blablablabla');
        res.status(401).json({
          userFound,
          hashedPassword: null, // or null, depending on your logic
          error: 'Invalid credentials',
          field: 'password',
        });
      }
    }
  } catch (error) {
    console.error('Error during login:', error);
    console.error(error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
// mdp hashé = Azertyui1_
// pour chuqi
