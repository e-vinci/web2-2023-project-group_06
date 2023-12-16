/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-len */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const jwtsecret = 'ilovebooks!';
const lifetimeJwt = 24 * 60 * 60 * 1000;

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

  console.log(`models/login userFound${userFound}`); // casse ICI
  if (!userFound) return undefined;

  console.log(`models password : ${password} userFound.password : ${userFound.password}`);

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

    console.log('models Users found:', result.rows);

    // Assuming result.rows is an array of users
    const userFound = result.rows.find((user) => user.login === email); // c est casse ici

    console.log(`models USERFOUND ${userFound}`);
    return userFound;
  } catch (error) {
    console.error('models Error reading user:', error);
    return undefined;
  }
}

module.exports = { login, readOneUserFromUsername };
