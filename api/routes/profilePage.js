const express = require('express');

const { updateProfile } = require('../models/profilePages');

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    userName, surname, profileDescription, id,
  } = req.body;
  console.log(userName, surname, profileDescription, id);
  try {
    const profile = await updateProfile(userName, surname, profileDescription, id);
    return res.json(profile);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
