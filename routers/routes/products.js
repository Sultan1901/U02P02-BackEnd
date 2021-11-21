const express = require("express");
const { createproduct, showproduct,update,remove } = require("../controller/products");
const productsRouter = express.Router();
productsRouter.post("/add", createproduct);
productsRouter.get("/read", showproduct);
productsRouter.put("/update/:id", update);
productsRouter.delete("/remove/:id", remove);
module.exports = productsRouter;
