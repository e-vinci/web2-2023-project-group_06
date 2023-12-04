const express = require('express');

const getLog = require('../models/listUsers');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allUser = await getLog.getLog();
    return res.json(allUser);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
