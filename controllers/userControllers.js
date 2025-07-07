const queries = require('../db/queries');
const populate = require('../db/populatedb');

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
    await populate.main();
    res.redirect('/');
}

async function getEdit(req,res){
    const clickedId = req.params.id;
    const data = await queries.getEditData(clickedId);
    res.render('edit',{
                        title:"Edit item",
                        data:data[0]
                        }
    );
}

async function postEdit(req,res){
    const id = req.params.id;
    const input = req.body;
    const data = {name:input.name,quantity:input.quantity,rating:input.rating,category:input.category,description:input.description}
    await queries.postEditData(id,data);
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
    getEdit,
    postEdit
}