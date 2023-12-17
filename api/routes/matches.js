const express = require('express');

const { readMatches } = require('../models/matches');

const router = express.Router();

router.get('/', async (req, res) => {
  const {
    id,
  } = req.body;
  try {
    const allMatches = await readMatches(id);
    return res.json(allMatches);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
