const productsModel = require("../../DB/models/porductsSchema");
const createproduct = (req, res) => {
  const { name, img, price,kind } = req.body;
  const newproducts = new productsModel({
    name,
    img,
    price,
    kind
  });
  newproducts
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const showproduct = (req, res) => {
  productsModel
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
  const {name, img, price,kind} = req.body
  productsModel
  // first parameter is the condition where we will search for the id of the user in our database
  // second parameter new value that we want to update
  // third parameter is options, we used the option new so that we can return the modified user
    .findOneAndUpdate({_id:id},{name, img, price,kind},{new:true})
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
//   const {name, img, price,kind} = req.body
productsModel
  
    .findOneAndRemove({_id:id},{new:true})
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
module.exports = { createproduct, showproduct,update,remove };
