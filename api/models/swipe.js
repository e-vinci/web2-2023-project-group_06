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
    const res = await pool.query('SELECT photo FROM project.books WHERE id_book = $1', [number]);
    return res.rows;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

module.exports = { getImage };
