const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(request, response, next) => {
   response.send('<form action="/product" method="POST"><input type=""text" name="title"><button type="submit">Add product</button></form>')
});

app.use('/product', (request, response, next) =>{
    console.log(request.body)
    response.redirect('/')
})

app.use('/',(request, response, next) => {
    response.send('<h1> Hello for Express!</h1>')
});

app.listen(3000);

