const express = require('express');

const readAllBooks = require('../models/books');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allBooks = await readAllBooks();
    return res.json(allBooks);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
