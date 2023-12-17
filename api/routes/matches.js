const express = require('express');

const { readMatches } = require('../models/matches');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const allMatches = await readMatches(req.params.id);
    console.log('Vous etes ici ;;;;;');
    console.log(allMatches);
    return res.json(allMatches);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
