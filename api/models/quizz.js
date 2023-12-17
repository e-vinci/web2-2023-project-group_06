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

const setUserType = async (type, score, id) => {
  try {
    const res = await pool.query('UPDATE project.users SET category = $1, quizz_score = $2 WHERE id_user = $3;', [type, score, id]);
    return res;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

module.exports = { setUserType };
