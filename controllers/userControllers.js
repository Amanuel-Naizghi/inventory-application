async function getAllInventories(req,res){
    res.render('index',{title:"Home"});
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