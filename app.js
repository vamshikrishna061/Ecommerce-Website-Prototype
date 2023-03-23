const express = require('express');

const app = express();

app.use((request, response, next) => {
    console.log('In the middleware!');
    next();// Allowa the request to continue to the next middlw ware in line//
});

app.use((request, response, next) => {
    console.log('In another middleware!');
    response.send('<h1> Hello for Express!</h1>')
});


app.listen(3000);