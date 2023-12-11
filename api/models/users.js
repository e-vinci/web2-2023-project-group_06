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

const createUser = async (login, password) => {
  try {
    const query = `
      INSERT INTO project.users (
        name,
        surname,
        profile_description,
        password,
        login,
        category,
        quizz_score,
        profile_picture
      )
      VALUES ( '', '', '', $2, $1, NULL, 0, '') RETURNING password, login
    `;
    const values = [password, login];

    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error creating user:', err); // Ajoutez cette ligne pour voir l'erreur réelle
    throw new Error('Failed to create user');
  }
};
const existingUser = (email) => new Promise((resolve, reject) => {
  pool.query('SELECT * FROM project.users WHERE login = $1', [email], (err, res) => {
    if (err) {
      console.log(err.message);
      reject(err);
    } else {
      console.log('just do it');
      resolve(res.rows);
    }
  });
});
module.exports = { createUser };
module.exports = { existingUser };
