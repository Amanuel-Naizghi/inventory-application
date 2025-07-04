const pool = require("./pool");

async function getAllData(){
    const {rows} = await pool.query("SELECT * FROM inventory");
    return rows;
}

async function addData(data){
    await pool.query(`INSERT INTO inventory (name,quantity,rating,category,description)
                      VALUES ($1 ,$2 ,$3 ,$4 ,$5) RETURNING *`,
                      [data.name,data.quantity,data.rating,data.category,data.description]
                    );
}

module.exports = {
    getAllData,
    addData
}