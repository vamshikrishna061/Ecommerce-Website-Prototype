const user = require("../models/user");

exports.getUser = (req, res, next) => {
  user
    .findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postUser = async (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const data = await user.create({
      name: name,
      email: email,
      mobile: mobile,
    });
    res.status(201).json({ newUserDetail: data });
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

exports.getDelete = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const userField = await user.findByPk(userId);
    await userField.destroy();
    res.status(201).json({ delete: userField });
  } catch (err) {
    console.error(err);
  }
};
