const {Pool} = require('pg');

module.exports = new Pool({
    host: "localhost",
    user: "amanuel",
    database: "inventory_db",
    password: "Aman1491",
    port: 5432,
})