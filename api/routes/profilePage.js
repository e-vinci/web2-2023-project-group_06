const express = require('express');

const { updateProfile } = require('../models/profilePages');

const router = express.Router();

router.get('/profilePage', async (req, res) => {
  const {
    userName, surname, profileDescription,
  } = req.body;
  try {
    const profile = await updateProfile(userName, surname, profileDescription);
    return res.json(profile);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
