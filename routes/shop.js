const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
 res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
  })
  router.post('/success',(req,res,next)=>{
      if(req.body.emailId.includes('@'))
      {
        res.send('<h1>Form Successfully filled</h1>');
      }
      else
      {
        res.redirect('/contactus')
      }
    })





module.exports = router;