const {Router} = require('express');
const userControllers = require('../controllers/userControllers');
const router = Router();

router.get('/',  userControllers.getAllInventories);
router.get('/filter',userControllers.getFilteredData);
router.get('/add',userControllers.getAddData);

module.exports = router;