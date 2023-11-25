/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const config = require('../../config');

const { dbPath } = config;

// eslint-disable-next-line import/order, import/no-unresolved
const db = require('pg')(dbPath, { verbose: console.log });

module.exports = db;

// pour la DB