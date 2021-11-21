const express = require("express");
const { createUser, showuser,update,remove } = require("../controller/users");
const userRouter = express.Router();
userRouter.post("/add", createUser);
userRouter.get("/read", showuser);
userRouter.put("/update/:id", update);
userRouter.delete("/remove/:id", remove);
module.exports = userRouter;
