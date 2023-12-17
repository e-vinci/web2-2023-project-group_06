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

const readMatches = async (id) => {
  try {
    const res = await pool.query('SELECT bo.* FROM project.books bo, project.matches ma WHERE ma.user = $1 AND ma.book = bo.id_book', [id]);
    console.log('Résultat de la requête :', res.rows);
    return res.rows;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

module.exports = { readMatches };
