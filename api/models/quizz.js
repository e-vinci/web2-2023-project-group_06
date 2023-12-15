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

const setUserType = async (type, id) => {
  try {
    const res = await pool.query('UPDATE projet.users SET user_type = $1 WHERE id_user = $2;', [type, id]);
    return res;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

module.exports = { setUserType };
