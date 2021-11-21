const express = require("express");
const { createUser, showuser } = require("./../controller/index");
const userRouter = express.Router();
userRouter.post("/add", createUser);
userRouter.get("/read", showuser);
module.exports = userRouter;
