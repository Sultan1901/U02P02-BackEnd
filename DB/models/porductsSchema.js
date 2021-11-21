const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
    name: { type: String,unique:true},
    img: { type: String},
    price: { type: String},
    kind: { type: String},
});

module.exports = mongoose.model("product", productsSchema);
