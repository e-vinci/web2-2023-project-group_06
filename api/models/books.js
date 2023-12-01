/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies

const { Pool } = require('pg');

// to secure the password
const pw = 'UTTWcbB6Bfa6Dw7OkgwTcQALfR9RKGFF';

const pool = new Pool({
<<<<<<< HEAD
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'GuillaumeK15_',
=======
  user: 'brhhbrnw',
  host: 'flora.db.elephantsql.com',
  database: 'brhhbrnw',
  password: pw,
>>>>>>> 34d870c0674cb7f68d9f27d543da0a7ca6a5cbcd
  port: '5432',
});

const readAllbooks = () => new Promise((resolve, reject) => {
  pool.query('SELECT * FROM project.books', (err, res) => {
    if (err) {
      console.log(err.message);
      reject(err);
    } else {
      console.log('just do it');
      resolve(res.rows);
    }
  });
});

module.exports = readAllbooks;
