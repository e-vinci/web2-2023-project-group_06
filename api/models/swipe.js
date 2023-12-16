/* eslint-disable max-len */
/* eslint-disable no-console */

const { Pool } = require('pg');

const pw = 'UTTWcbB6Bfa6Dw7OkgwTcQALfR9RKGFF';

const pool = new Pool({
  user: 'brhhbrnw',
  host: 'flora.db.elephantsql.com',
  database: 'brhhbrnw',
  password: pw,
  port: '5432',
});

const getImage = async (number) => {
  try {
    const res = await pool.query('SELECT photo, score_fluffiness, score_darkness, id_book FROM project.books WHERE id_book = $1', [number]);
    return res.rows;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

const match = async (userID, book) => {
  try {
    const query = 'INSERT INTO project.matches ("user", book) VALUES ($1, $2)';
    const values = [userID, book];
    const res = await pool.query(query, values);
    return res.rows;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

module.exports = { getImage, match };
