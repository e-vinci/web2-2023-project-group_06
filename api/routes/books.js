const express = require('express');

const readAllBooks = require('../models/books');

const router = express.Router();

router.get('/', (req, res) => {
  const allBooks = readAllBooks(req?.query?.order);

  return res.json(allBooks);
});

module.exports = router;
