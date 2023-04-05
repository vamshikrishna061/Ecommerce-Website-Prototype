const path = require('path');
const rootDir = require('../util/path.js');

const Product = require('../models/product.js');

// module.exports.getAddProduct = (req,res,next)=>{
//     res.render('add-product', {
//         pageTitle: 'Add Product',
//         path: '/admin/add-product',
//         formsCSS: true,
//         productCSS: true,
//         activeAddProduct: true
//       });
//     //res.sendFile(path.join(rootDir,'views','add-product.html'));
// }

// module.exports.postAddProduct = (req,res,next)=>{
//     const product = new Product(req.body.title);
//   product.save();
//   res.redirect('/');
//    // console.log(req.body);
//    //const product = new Product(req.body.title);
//   // product.save()
//    // res.redirect('/shop')
// }


exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};