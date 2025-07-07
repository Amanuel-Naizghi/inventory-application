const pool = require("./pool");

async function getAllData(){
    const {rows} = await pool.query(`SELECT * FROM inventory`);
    return rows;
}

async function addData(data){
    await pool.query(`INSERT INTO inventory (name,quantity,rating,category,description)
                      VALUES ($1 ,$2 ,$3 ,$4 ,$5) RETURNING *`,
                      [data.name,data.quantity,data.rating,data.category,data.description]
                    );
}

async function removeItem(id){
    await pool.query(`DELETE FROM inventory WHERE id = $1 RETURNING *`,[id]);
}

async function resetDatabase(){
    await pool.query(`TRUNCATE TABLE inventory RESTART IDENTITY`);
}
//This function is for getting the data for the clicked item values so that it will be passed as an initial input in  the edit inputs
async function getEditData(id){
    const {rows} = await pool.query(`SELECT * FROM inventory WHERE id = $1 `,[id]);
    return rows;
}

async function postEditData(id,data){
    await pool.query(`UPDATE inventory SET 
                      name = $1, quantity = $2, rating = $3, category = $4, description = $5 
                      WHERE id = $6 RETURNING *`,[data.name,data.quantity,data.rating,data.category,data.description,id]);
}


module.exports = {
    getAllData,
    addData,
    removeItem,
    resetDatabase,
    getEditData,
    postEditData
}