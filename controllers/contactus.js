const path = require('path');
const rootDir = require('../util/path.js');

exports.getContactUs = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
}

exports.postContactUs = (req,res,next)=>{
    //console.log(req.body);
    res.sendFile(path.join(rootDir,'views','sucess.html'))
 }

