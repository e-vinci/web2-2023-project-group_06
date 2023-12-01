/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '',
  port: '5432',
});

const loginUser = () => new Promise((resolve, reject) => {
  pool.connect();

  pool.query('SELECT login, password FROM project.users', (err, res) => {
    if (err) {
      console.log(err.message);
      reject(err);
    } else {
      console.log('just do it');
      resolve(res.rows);
    }
  });
});

module.exports = loginUser;
