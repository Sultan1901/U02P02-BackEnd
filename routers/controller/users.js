const userModel = require("../../DB/models/userSchema");
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
const update = (req, res) => {
  const { id } = req.params;
  const {name, password, email} = req.body
  userModel
  // first parameter is the condition where we will search for the id of the user in our database
  // second parameter new value that we want to update
  // third parameter is options, we used the option new so that we can return the modified user
    .findOneAndUpdate({_id:id},{name, password, email},{new:true})
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const remove = (req, res) => {
  const { id } = req.params;
  const {name, password, email} = req.body
  userModel
  // first parameter is the condition where we will search for the id of the user in our database
  // second parameter new value that we want to update
  // third parameter is options, we used the option new so that we can return the modified user
    .findOneAndRemove({_id:id},{new:true})
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = { createUser, showuser,update,remove };
