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

const createUser = async (login, password) => {
  try {
    // Vérifie si l'utilisateur existe déjà
    const userExists = await existingUser(login);
    if (userExists.length > 0) {
      throw new Error('Cet email est déjà assigné à un compte.');
    }

    // Continue la création de l'utilisateur s'il n'existe pas
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
      VALUES ('', '', '', $1, $2, NULL, 0, '') RETURNING password, login
    `;
    const values = [password, login];

    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error creating user:', err);
    throw err;
  }
};

module.exports = { createUser, existingUser };
