const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const multer = require('multer');
const path = require('path');
const { saveProfilePicture } = require('../models/uploadProfilePicture');

const router = express.Router();

// Configurez Multer pour stocker les fichiers dans le dossier public/images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Ajoutez l'extension de fichier
  },
});
const upload = multer({ storage });

router.post('/', upload.single('profilePicture'), async (req, res) => {
  try {
    // Récupérez l'id de l'utilisateur
    const { id } = req.body;

    // Récupérez le chemin du fichier
    const filePath = req.file.path;

    // Enregistrez le chemin du fichier dans la base de données
    await saveProfilePicture(id, filePath);

    // Renvoyez une réponse
    res.json({ success: true, imagePath: filePath });
  } catch (error) {
    console.error('Error uploading profile picture:', error);
    res.json({ success: false });
  }
});

module.exports = router;
