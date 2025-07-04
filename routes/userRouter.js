const {Router} = require('express');
const userControllers = require('../controllers/userControllers');
const router = Router();

router.get('/',  userControllers.getAllInventories);
router.get('/add',userControllers.getAddData);
router.post('/add',userControllers.postAddData);
router.get('/filter',userControllers.getFilteredData);

module.exports = router;