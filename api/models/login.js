/* eslint-disable max-len */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const { Pool } = require('pg');

const pw = 'UTTWcbB6Bfa6Dw7OkgwTcQALfR9RKGFF';

const pool = new Pool({
  user: 'brhhbrnw',
  host: 'flora.db.elephantsql.com',
  database: 'brhhbrnw',
  password: pw,
  port: '5432',
});

const loginUser = (email, password) => new Promise((resolve, reject) => {
  pool.query('SELECT * FROM project.users WHERE login = $1 AND password = $2', [email, password], (err, res) => {
    if (err) {
      console.log(err.message);
      reject(err);
    } else {
      console.log('just do it');
      resolve(res.rows);
    }
  });
});

module.exports = { loginUser };
