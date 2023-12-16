const express = require('express');

const { getImage } = require('../models/swipe');
const { authorize } = require('../utils/auths');

const router = express.Router();

router.get('/', authorize, async (req, res) => {
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

module.exports = router;
