const userModel = require("./../../DB/models/userSchema");
const createUser = (req, res) => {
  const { name, password, email } = req.body;
  const newUser = new userModel({
    name,
    password,
    email,
  });
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const showuser = (req, res) => {
  userModel
    .find({})
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = { createUser, showuser };
