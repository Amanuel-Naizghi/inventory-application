const pool = require("./pool");

async function getAllData(){
    const {rows} = await pool.query("SELECT * FROM inventory");
    return rows;
}

module.exports = {
    getAllData
}