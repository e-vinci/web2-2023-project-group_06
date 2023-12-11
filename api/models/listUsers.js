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

const getLog = () => new Promise((resolve, reject) => {
  pool.query('SELECT * FROM project.users', (err, res) => {
    if (err) {
      console.error('Error executing database query:', err);
      reject(err);
    } else {
      console.log('Database query successful. Result:', res.rows);
      resolve(res.rows);
    }
  });
});

const readOneUser = async (id) => {
  try {
    const res = await pool.query('SELECT * FROM project.users WHERE id_user = $1', [id]);
    console.log('get single user');
    return res.rows;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

module.exports = { getLog, readOneUser };
