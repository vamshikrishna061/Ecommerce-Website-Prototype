const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products')

router.get('/', productsController.getProducts)

router.get('/contactus', productsController.getContactUs)

router.post('/sucess', productsController.postSucess)

module.exports = router;