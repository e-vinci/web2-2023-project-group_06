const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const multer = require('multer');
const path = require('path');
const { saveProfilePicture } = require('../models/uploadProfilePicture');

const router = express.Router();
const prefixe = 'https://boonder.azurewebsites.net/';
// Configurez Multer pour stocker les fichiers dans le dossier public/images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join('public', 'images')); // Utilisez path.join pour la compatibilité multiplateforme
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

router.post('/', upload.single('profilePicture'), async (req, res) => {
  try {
    // Récupérez l'id de l'utilisateur
    const { id } = req.body;

    // Récupérez le chemin du fichier
    const filePath = req.file.path;
    const filePathWithSlashes = filePath.replace(/\\/g, '/');

    const urlPath = prefixe + filePathWithSlashes;

    // Enregistrez le chemin du fichier dans la base de données
    await saveProfilePicture(id, urlPath);

    // Renvoyez une réponse
    res.json({ success: true, imagePath: urlPath });
  } catch (error) {
    console.error('Error uploading profile picture:', error);
    res.json({ success: false });
  }
});

module.exports = router;
