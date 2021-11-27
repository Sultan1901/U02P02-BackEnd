const express = require("express");
const {
  createUser,
  showuser,
  update,
  remove,
//   cartUser,
  removeUserCart,
  cartUsercheck,
  getCart,
} = require("../controller/users");
const userRouter = express.Router();
userRouter.post("/add", createUser);
userRouter.get("/read", showuser);
userRouter.put("/update/:id", update);
userRouter.delete("/remove/:id", remove);
userRouter.put("/yourcart/:email/:ObjectId", cartUsercheck);
// userRouter.put("/fav/:email/:name", cartUser);
userRouter.put("/removecart/:email/:_id", removeUserCart);
userRouter.get("/cart/:email", getCart);
module.exports = userRouter;
