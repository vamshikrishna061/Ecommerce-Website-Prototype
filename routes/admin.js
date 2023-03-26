const express = require('express');

const router = express.Router();

// /admin/add-product => GET REQUEST//
router.get('/add-product',(request, response, next) => {
    response.send('<form action="/admin/add-product" method="POST"><input type=""text" name="title"><button type="submit">Add product</button></form>');
 });
 

 // /admin/add-product => POST REQUEST/
 router.post('/add-product', (request, response, next) =>{
     console.log(request.body)
     response.redirect('/')
 });

module.exports = router;