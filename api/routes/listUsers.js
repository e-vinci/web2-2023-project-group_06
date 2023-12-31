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

router.get('/:id', async (req, res) => {
  try {
    const user = await getLog.readOneUser(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
