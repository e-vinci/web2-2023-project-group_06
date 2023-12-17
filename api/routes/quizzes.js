/* eslint-disable max-len */
const express = require('express');

const quizzActions = require('../models/quizz');

const router = express.Router();

router.post('/', async (req, res) => {
  // eslint-disable-next-line camelcase
  const { user_type, user_id, user_score } = req.body;

  try {
    const newScore = await quizzActions.setUserType(user_type, user_score, user_id);
    return res.json(newScore);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// je ne sais pas quoi faire dans la route, mais il faut que quand on clique sur submit dans le quizz, ça ramène sur la page de profil
// et utilise la fonction du modèle, comme ça l'utilisateur voit de quel type il est.

module.exports = router;
