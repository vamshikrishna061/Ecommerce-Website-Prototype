const path = require('path');
const rootDir = require('../util/path.js');

module.exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

module.exports.postAddProduct = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop')
}