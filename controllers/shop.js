const path = require('path');
const rootDir = require('../util/path.js');

exports.getShop = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
}