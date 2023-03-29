const path = require('path');
const rootDir = require('../util/path')


exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
   };

   exports.postAddProduct =  (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
   };


   exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
   };



   exports.getContactUs = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
  }
  
  exports.postSucess= (req,res,next)=>{
      if(req.body.emailId.includes('@'))
      {
        res.send('<h1>Form Successfully filled</h1>');
      }
      else
      {
        res.redirect('/contactus')
      }
    };





