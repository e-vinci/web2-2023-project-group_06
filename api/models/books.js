/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies

const { Pool } = require('pg');

// to secure the password
const pw = 'UTTWcbB6Bfa6Dw7OkgwTcQALfR9RKGFF';

const pool = new Pool({
  user: 'brhhbrnw',
  host: 'flora.db.elephantsql.com',
  database: 'brhhbrnw',
  password: pw,
  port: '5432',
});

const readAllbooks = async () => {
  try {
    const res = await pool.query('SELECT * FROM project.books');
    console.log('just do it');
    return res.rows;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

const addOneBooks = async () => {
  try {
    const res = await pool.query("INSERT INTO project.books(title, nb_pages, author, description, score_sluttiness, score_fluffiness, score_darkness, photo) VALUES('The Sign of the Four',123,'sir Arhtur Conan Doyle','The Sign of the Four is a Sherlock Holmes novel where a complex plot involves service in East India.',0,0,10,'')");
    return res;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

module.exports = { readAllbooks, addOneBooks };
