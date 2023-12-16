const express = require('express');

const { getImage, match } = require('../models/swipe');

const router = express.Router();

router.get('/', async (req, res) => {
  const number = Math.round(Math.random() * 61);

  try {
    let swipeBook = await getImage(number);
    console.log('vous êtes ici authorize : ');
    swipeBook = swipeBook[0].photo.replace('api/', '');
    swipeBook = `https://boonder.azurewebsites.net/${swipeBook}`;
    return res.json(swipeBook);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.post('/:user/:book', async (req, res) => {
  const { user } = req.params;
  const { book } = req.params;
  try {
    const matchBook = await match(user, book);
    console.log('vous êtes ici : ');
    return res.json(matchBook);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
