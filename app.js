const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const sequelize = require("./util/database");
const Product = require("./models/product");
const Usr = require("./models/usr");

const app = express();

const cors = require("cors");
const userRoutes = require("./routes/user");
const expenseRoutes = require("./routes/expense");

app.use(bodyParser.json());
app.use(cors());
app.use(userRoutes);
app.use("/expense", expenseRoutes);

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  Usr.findAll()
    .then((usr) => {
      req.usr = usr;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(userRoutes);

app.use(errorController.get404);

Product.belongsTo(Usr, { constraints: true, onDelete: "CASCADE" });
Usr.hasMany(Product);

// sequelize
//   //.sync({ force: true })
//   .sync()
//   .then((result) => {
//     return Usr.findAll();
//   })
//   .then((usr) => {
//     if (!usr) {
//       return Usr.create({ name: "vammy", email: "vammy@test.com" });
//     }
//     return usr;
//   })
//   .then((usr) => {
//     console.log(usr);
//     app.listen(3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

sequelize
  .sync({ force: true })
  .then((result) => {
    console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
