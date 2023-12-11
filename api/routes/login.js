/* eslint-disable no-console */
const express = require('express');

const bcrypt = require('bcrypt');

const loginUser = require('../models/login');

const router = express.Router();

router.post('/', async (req, res) => {
  console.log('USERS LOGIN');

  const { email, password } = req.body;

  console.log(`HERE it's the user email: ${email}`);
  console.log(`HERE it's the user password: ${password}`);

  try {
    const userFound = await loginUser.loginUser(email);

    console.log(`User found: ${JSON.stringify(userFound)}`);

    if (userFound.length !== undefined) {
      const hashedPassword = userFound[0].password;
      console.log(`Stored hashed password: ${hashedPassword}`);
      console.log(`password value: ${password}`);

      if (bcrypt.compareSync(password, hashedPassword)) {
        console.log('password correct');
        if (userFound[0].is_admin === true) {
          console.log('IS ADMIN');
        }
        res.status(200).json({ userFound, hashedPassword });
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
// $2b$10$lhk/KFKHX4QaNJOSWLvJKupws/Au/pUmFw3zAVtbY8QlaSjya0SKO = Azertyui1_
// $2y$10$DyeAAQUvkNF8yUPmjk.PkuyDCZojX0Fv8UvTu/tVGOEAa3N3pCqzO
