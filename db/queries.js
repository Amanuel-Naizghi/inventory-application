const pool = require("./pool");
//Selecting all the rows from the inventory table
async function getAllData(){
    const {rows} = await pool.query(`SELECT * FROM inventory`);
    return rows;
}
//Inserting data to the database
async function addData(data){
    await pool.query(`INSERT INTO inventory (name,quantity,rating,category,description)
                      VALUES ($1 ,$2 ,$3 ,$4 ,$5) RETURNING *`,
                      [data.name,data.quantity,data.rating,data.category,data.description]
                    );
}
//Removing clicked item from the db
async function removeItem(id){
    await pool.query(`DELETE FROM inventory WHERE id = $1 RETURNING *`,[id]);
}
//Clearing all rows in the inventory table
async function resetDatabase(){
    await pool.query(`TRUNCATE TABLE inventory RESTART IDENTITY`);
}
//This function is for getting the data for the clicked item values so that it will be passed as an initial input in  the edit inputs
async function getEditData(id){
    const {rows} = await pool.query(`SELECT * FROM inventory WHERE id = $1 `,[id]);
    return rows;
}
//For updating the database from the edited values
async function postEditData(id,data){
    await pool.query(`UPDATE inventory SET 
                      name = $1, quantity = $2, rating = $3, category = $4, description = $5 
                      WHERE id = $6 RETURNING *`,[data.name,data.quantity,data.rating,data.category,data.description,id]);
}
//Filtering data based on the input given by the user
async function getFilteredData(filterType,filterInput){
    //Only used when the user try to filter numerical data like price and rating (ILIKE) doesn't work with numerical data
    if(filterType === 'price' || filterType === 'rating'){
        const {rows} = await pool.query(`SELECT * FROM inventory WHERE ${filterType} = $1 `,[filterInput.trim()]);
    return rows;
    }
    //For filtering data from the user input and ILIKE is used for making the filter case insensitive
    const {rows} = await pool.query(`SELECT * FROM inventory WHERE ${filterType} ILIKE $1 `,[filterInput.trim()]);
    return rows;
}


module.exports = {
    getAllData,
    addData,
    removeItem,
    resetDatabase,
    getEditData,
    postEditData,
    getFilteredData
}