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

const updateProfile = async (userName, surname, profileDescription, id) => {
  console.log(userName, surname, profileDescription, id);
  try {
    // Continue la création de l'utilisateur s'il n'existe pas
    const query = `
    UPDATE project.users
    SET 
    name = $1,
    surname = $2,
    profile_description = $3
    WHERE id_user = $4`;
    const values = [userName, surname, profileDescription, id];

    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error creating user:', err);
    throw err;
  }
};

module.exports = { updateProfile };
