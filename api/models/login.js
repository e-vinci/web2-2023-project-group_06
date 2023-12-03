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

const loginUser = () => new Promise((resolve, reject) => {
  pool.connect();

  pool.query('SELECT * FROM project.users WHERE email = ?', (err, res) => {
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

/* INSERT INTO project.users(name, surname, profile_description, password, login, category, quizz_score, is_admin, profile_picture)
VALUES ('Ambrozewski', 'Kornel', 'jaime le commiunisme', 'kornel123', 'kornel@gmail.com', 'dark', 8, true, ''); */
