// eslint-disable-next-line import/no-extraneous-dependencies
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '8861576',
  port: '5432',
});

const readAllbooks = () => new Promise((resolve, reject) => {
  pool.connect();

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
