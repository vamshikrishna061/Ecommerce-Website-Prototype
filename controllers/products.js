const path = require('path');
const rootDir = require('../util/path.js');

const Product = require('../models/product');

module.exports.getAddProduct = (req,res,next)=>{
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
}

module.exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
   // console.log(req.body);
   //const product = new Product(req.body.title);
  // product.save()
   // res.redirect('/shop')
}