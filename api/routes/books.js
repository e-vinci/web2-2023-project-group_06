/* eslint-disable max-len */
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

// router.get('/:id', authorize, async (req, res) => {            cense n affiche la page que lorsqu on s est login, marche pas encore, mais j ai reussi a generé un token en faisant un login regarde dans les consoles.log de /routes/login.js
router.get('/:id', async (req, res) => {
  try {
    const book = await bookActions.readOneBook(req.params.id);
    res.json(book);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
