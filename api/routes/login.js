/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser
const loginUser = require('../models/login');

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true })); // Use body-parser middleware

router.post('/login', async (req, res) => {
  console.log('USERS LOGIN');

  const { email } = req.body; // Assuming your form sends email and password

  console.log(`HERE it's the userLogin email: ${email}`);

  try {
    const userFound = await loginUser(email); // Pass the email to your loginUser function

    console.log(`User found: ${JSON.stringify(userFound)}`);

    if (userFound.length > 0) { // Check if userFound is not an empty array
      console.log('password correct');
      req.session.user = userFound;
      req.session.user_id = userFound[0].user_id; // Assuming user_id is a property in your user object
      console.log(`HERE it's the req.session.user_id: ${req.session.user_id}`);
      res.redirect('/');
    } else {
      req.session.error = 'Invalid email or password';
      console.log('PROBLEM ------------------------');
      res.redirect('/login');
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
