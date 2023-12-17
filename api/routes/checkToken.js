/* eslint-disable no-console */
const express = require('express');
const { checkTokenValidity } = require('../models/checkToken');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log('routes begin');
    const { token } = req.body;
    console.log(`routes token req.body: ${token}`);
    const isValid = await checkTokenValidity(token);
    console.log(`routes isValid : ${isValid}`);
    res.json({ isValid });
    console.log('routes end');
  } catch (error) {
    console.error('Error checking token validity:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
