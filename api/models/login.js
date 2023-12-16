/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-len */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');

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

const loginUser = (email) => new Promise((resolve, reject) => {
  pool.query('SELECT * FROM project.users WHERE login = $1', [email], (err, res) => {
    if (err) {
      console.error(err.message);
      reject(new Error('Database error'));
    } else {
      console.log('just do it');

      const token = jwt.sign(
        { res },
        jwtsecret,
        { expiresIn: lifetimeJwt },
      );

      const authenticatedUser = {
        res,
        token,
      };

      // bonne affichage des contextes : authenticatedUser.res.rows au lieu de authenticatedUser (chuqi)
      resolve(authenticatedUser.res.rows);
    }
  });
});

module.exports = { loginUser };
