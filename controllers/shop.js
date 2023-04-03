const path = require('path');
const Product = require('../models/product.js');
const rootDir = require('../util/path.js');

exports.getShop = (req,res,next)=>{
   Product.fetchAll((products=>{
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });

   }));
 
    //const products = Product.fetchAll();
   // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
}