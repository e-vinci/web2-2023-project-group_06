/* eslint-disable no-console */
const db = require('./db_conf');

module.exports.save = (data) => {
  console.log(data);
  const stmt = db.prepare('INSERT INTO users (last_name, first_name, email, password, is_admin) VALUES (?, ?, ?, ?, 0)');
  const info = stmt.run(data.last_name, data.firstname, data.email, data.password);
  console.log(`user model save insert${info.changes}`);
};

module.exports.find = (email) => {
  console.log(email);
  return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
};

// pour la DB