// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');

// const admin = require('./routes/admin.js');
// const shop = require('./routes/shop.js');
// const contactus = require('./routes/contactus.js');

// const controller404 = require('./controllers/error');

// const app = express();
// app.set('view engine', 'ejs');
// app.set('views', 'views');

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin',admin)

// app.use('/shop',shop)

// app.use('/contactus', contactus)

// app.use('/',controller404.get404)

// app.listen('3000');


const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);