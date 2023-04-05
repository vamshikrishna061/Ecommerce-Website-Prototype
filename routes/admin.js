// const express = require('express');

// const addProductController = require('../controllers/admin');

// const Router = express.Router();

// Router.get('/add-product',addProductController.getAddProduct)


// // /admin/products => GET
// Router.get('/products', addProductController.getProducts);

// Router.post('/add-product',addProductController.postAddProduct)

// module.exports = Router;

const path = require('path');
const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();
// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);
// /admin/products => GET
router.get('/products', adminController.getProducts);
// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);
module.exports = router;