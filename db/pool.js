const { Pool } = require('pg');

// Parse the connection string manually
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Required for Neon
  },
});

console.log("💡 Using DATABASE_URL:", connectionString);

module.exports = pool;

