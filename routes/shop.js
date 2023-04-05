// const express = require('express');

// const shopController = require('../controllers/shop');

// const Router = express.Router();

// Router.get('/',shopController.getShop);

// module.exports = Router;


const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;