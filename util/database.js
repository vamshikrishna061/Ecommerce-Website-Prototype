// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'MySQL@2023', {
//     dialect: 'mysql',
//     host: 'localhost'
// });

// module.exports = sequelize;

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://SAMMY:ZLaCJ4Ic8wSbU38c@cluster0.fz5axti.mongodb.net/shop?retryWrites=true&w=majority"
  )

    .then((client) => {
      console.log("connected");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
