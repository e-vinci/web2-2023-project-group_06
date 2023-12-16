const express = require('express');

const { getImage, match } = require('../models/swipe');

const router = express.Router();

router.get('/', async (req, res) => {
  const number = Math.round(Math.random() * 61);

  try {
    const swipeBookData = await getImage(number);
    console.log('vous êtes ici authorize : ');
    const swipeBook = {
      photo: `https://boonder.azurewebsites.net/${swipeBookData[0].photo.replace('api/', '')}`,
      scoreFluffiness: swipeBookData[0].score_fluffiness,
      scoreDarkness: swipeBookData[0].score_darkness,
    };
    return res.json(swipeBook);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { user, book } = req.body;
  try {
    const matchBook = await match(user, book);
    console.log('vous êtes ici : ');
    return res.json(matchBook);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
