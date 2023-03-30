const express = require('express');

const contactUsController = require('../controllers/contactus');

const Router = express.Router();

Router.get('/',contactUsController.getContactUs)

Router.post('/sucess',contactUsController.postContactUs)

module.exports = Router;