const queries = require('../db/queries');
const populateDB = require('../db/populatedb');

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

async function postAddData(req,res){
    const data = req.body;
    queries.addData(data);
    res.render('add',{title:"Add Item"});
}

async function postRemoveItem(req,res){
    queries.removeItem(req.params.id);
    res.redirect('/');
}

async function removeAllData(req,res){
    queries.resetDatabase();
    res.redirect('/');
}

async function populateDataBase(req,res){
    populateDB.main();
    res.redirect('/');
}

module.exports = {
    getAllInventories,
    getFilteredData,
    getAddData,
    postAddData,
    postRemoveItem,
    removeAllData,
    populateDataBase,
}