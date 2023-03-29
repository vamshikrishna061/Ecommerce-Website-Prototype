const path = require('path');
const rootDir = require('../util/path.js');

exports.get404 = (req,res,next)=>{
    if(req.url === '/') res.redirect('/shop')
    else res.status(404).sendFile(path.join(rootDir,'views','404.html'))
}