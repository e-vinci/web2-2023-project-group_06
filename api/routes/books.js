const express = require('express');

const bookActions = require('../models/books');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allBooks = await bookActions.readAllbooks();
    return res.json(allBooks);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.get('/add', async (req, res) => {
  try {
    const addBook = await bookActions.addOneBooks();
    return res.json(addBook);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
