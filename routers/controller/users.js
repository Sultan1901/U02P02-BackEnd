const userModel = require("../../DB/models/userSchema");
const users1 = ["ss", 2];
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
  const { name, password, email } = req.body;
  userModel
    // first parameter is the condition where we will search for the id of the user in our database
    // second parameter new value that we want to update
    // third parameter is options, we used the option new so that we can return the modified user
    .findOneAndUpdate({ _id: id }, { name, password, email }, { new: true })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const cartUser = (req, res) => {
  const { email, name } = req.params;
  userModel
    .findOneAndUpdate(
      { email: email },
      { $push: { favorite: name } },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const removeUserCart = (req, res) => {
  const { email, _id } = req.params;
  userModel
    .findOneAndUpdate(
      { email: email },
      { $pull: { favoriteSchema: _id } },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const cartUsercheck = (req, res) => {
  const { email, ObjectId } = req.params;
  console.log(email, ObjectId);
  userModel.findOne({ ObjectId: req.params.ObjectId }).then((user) => {
    userModel
      .findOneAndUpdate(
        { email: email },
        { $push: { favoriteSchema: ObjectId } },
        { new: true }
      )
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};

const getCart = (req, res) => {
  const { email } = req.params;
  userModel
    .find({ email: email })
    .populate("favoriteSchema")
    .exec()
    .then((result) => {
      res.send(result[0].favoriteSchema);
    })
    .catch((err) => {
      res.send(err);
    });
};

const remove = (req, res) => {
  const { id } = req.params;
  const { name, password, email } = req.body;
  userModel
    // first parameter is the condition where we will search for the id of the user in our database
    // second parameter new value that we want to update
    // third parameter is options, we used the option new so that we can return the modified user
    .findOneAndRemove({ _id: id }, { new: true })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = {
  createUser,
  showuser,
  update,
  remove,
  cartUser,
  removeUserCart,
  cartUsercheck,
  getCart,
};
