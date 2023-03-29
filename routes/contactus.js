const express = require('express');

const contactUsController = require('../controllers/contactus');

const Router = express.Router();

Router.get('/',contactUsController.getContactUs)

Router.post('/success',contactUsController.postContactUs)

module.exports = Router;