/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const pg = require('pg');

const { Pool } = pg;

// to secure the password
const pw = 'UTTWcbB6Bfa6Dw7OkgwTcQALfR9RKGFF';

const pool = new Pool({
  user: 'brhhbrnw',
  host: 'flora.db.elephantsql.com',
  database: 'brhhbrnw',
  password: pw,
  port: '5432',
});

async function saveProfilePicture(id, imagePath) {
  try {
    // Créez la requête SQL pour mettre à jour le chemin de l'image de l'utilisateur
    const sql = 'UPDATE users SET profile_picture = $1 WHERE id = $2';

    // Exécutez la requête SQL
    const result = await pool.query(sql, [imagePath, id]);

    return result;
  } catch (error) {
    console.error('Error uploading profile picture:', error);
    throw error;
  }
}

module.exports = { saveProfilePicture };
