const { Pool } = require('pg');

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // required by Neon
  },
});

module.exports = pool;

// module.exports = new Pool({
//     host: "localhost",
//     user: "amanuel",
//     database: "inventory_db",
//     password: "Aman1491",
//     port: 5432,
// })