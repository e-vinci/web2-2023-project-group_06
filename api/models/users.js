const pg = require('pg');

const { Pool } = pg;
const jwt = require('jsonwebtoken');

const jwtSecret = 'ilovebooks!';
const lifetimeJwt = 24 * 60 * 60 * 1000;

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
      console.error(err.message);
      reject(err);
    } else {
      console.log('just do it');
      const token = jwt.sign(
        { res },
        jwtSecret,
        { expiresIn: lifetimeJwt },
      );

      const authenticatedUser = {
        res,
        token,
      };

      resolve(authenticatedUser.res.rows);
    }
  });
});

const createUser = async (login, password, name, surname) => {
  try {
    const userExists = await existingUser(login);
    if (userExists.length > 0) {
      throw new Error('Cet email est déjà assigné à un compte.');
    }

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
      VALUES ($3, $4, '', $1, $2, NULL, 0, '') RETURNING password, login,name, surname
    `;
    const values = [password, login, name, surname];

    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error('Error creating user:', err);
    throw err;
  }
};

module.exports = { createUser, existingUser };
