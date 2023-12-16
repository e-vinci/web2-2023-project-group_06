/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-len */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const jwtsecret = 'ilovebooks!';

// const lifetimeJwt = 24 * 60 * 60 * 1000;
const lifetimeJwt = 60 * 10;

const pw = 'UTTWcbB6Bfa6Dw7OkgwTcQALfR9RKGFF';

const pool = new Pool({
  user: 'brhhbrnw',
  host: 'flora.db.elephantsql.com',
  database: 'brhhbrnw',
  password: pw,
  port: '5432',
});

async function login(email, password) {
  const userFound = await readOneUserFromUsername(email);

  if (!userFound) return undefined;

  // Compare hashed password using bcrypt
  const passwordMatch = await bcrypt.compare(password, userFound.password);

  if (!passwordMatch) return undefined;

  const token = jwt.sign(
    { email },
    jwtsecret,
    { expiresIn: lifetimeJwt },
  );

  const authenticatedUser = {
    email,
    token,
  };

  return authenticatedUser;
}

async function readOneUserFromUsername(email) {
  try {
    const result = await pool.query('SELECT * FROM project.users WHERE login = $1', [email]);

    // Assuming result.rows is an array of users
    const userFound = result.rows.find((user) => user.email === email);

    return userFound;
  } catch (error) {
    console.error('Error reading user:', error);
    return undefined;
  }
}

const loginUser = (email, password) => new Promise((resolve, reject) => {
  pool.query('SELECT * FROM project.users WHERE login = $1', [email], (err, res) => {
    if (err) {
      console.error(err.message);
      reject(new Error('Database error'));
    } else {
      console.log('just do it');

      if (res.rows.length === 0) {
        // User not found
        reject(new Error('User not found'));
        return;
      }

      const user = res.rows[0];

      // Compare hashed password using bcrypt - assuming user.password is the hashed password
      const passwordMatch = bcrypt.compareSync(password, user.password);

      if (!passwordMatch) {
        // Incorrect password
        reject(new Error('Incorrect password'));
        return;
      }

      const token = jwt.sign(
        { email },
        jwtsecret,
        { expiresIn: lifetimeJwt },
      );

      const authenticatedUser = {
        user,
        token,
      };

      resolve(authenticatedUser);
    }
  });
});

module.exports = { loginUser, login, readOneUserFromUsername };
