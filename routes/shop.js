const express = require('express');

const shopController = require('../controllers/shop');

const Router = express.Router();

Router.get('/',shopController.getShop)

module.exports = Router;