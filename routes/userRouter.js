const {Router} = require('express');
const userControllers = require('../controllers/userControllers');
const router = Router();

router.get('/',  userControllers.getAllInventories);
router.get('/add',userControllers.getAddData);
router.post('/add',userControllers.postAddData);
router.post('/:id/delete',userControllers.postRemoveItem);
router.post('/reset',userControllers.removeAllData);
router.post('/populate',userControllers.populateDataBase);
router.get('/:id/edit',userControllers.getEdit);
router.post('/:id/edit',userControllers.postEdit);
router.get('/filter',userControllers.filterData);

module.exports = router;