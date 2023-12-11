const express = require('express');

const { getImage } = require('../models/swipe');

const router = express.Router();

router.get('/', async (req, res) => {
  const number = Math.round(Math.random() * 61);

  try {
    const swipeBook = await getImage(number);
    return res.json(swipeBook);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
