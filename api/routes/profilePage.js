const express = require('express');

const { updateProfile } = require('../models/swipe');

const router = express.Router();

router.get('/profilePage', async (req, res) => {
  const {
    userName, surname, profileDescription, profilePicture,
  } = req.body;
  try {
    const profile = await updateProfile(userName, surname, profileDescription, profilePicture);
    return res.json(profile);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
