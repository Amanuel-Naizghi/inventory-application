const queries = require('../db/queries');

async function getAllInventories(req,res){
    const data = await queries.getAllData()
    res.render('index',{
                        title:"All inventory",
                        data:data
                       }
    );
}

async function getFilteredData(req,res){
    res.render('filter',{title:"Filter results"});
}

async function getAddData(req,res){
    res.render('add',{title:"Add Item"});
}

module.exports = {
    getAllInventories,
    getFilteredData,
    getAddData
}