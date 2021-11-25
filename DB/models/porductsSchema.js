const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  img: { type: String },
  kind: { type: String },
  price: { type: String },
  
 
});

module.exports = mongoose.model("Product", productsSchema);
