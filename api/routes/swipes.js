const express = require('express');
const { getImage } = require('../models/swipe');

const router = express.Router();

router.get('/swipe', async (req, res) => {
  const number = Math.round(Math.random() * 61);

  try {
    const swipeBook = await getImage(number);
    if (swipeBook && swipeBook.length > 0) {
      return res.json(swipeBook[0]); // Renvoie uniquement la première image
    }
    return res.status(404).json({ error: 'Image not found' });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
