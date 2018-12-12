var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, minlength: 1 },
    price: { type: Number, required: true},
    imageURL: { type: String, required: false }
  },
  { timestamps: true }
);
var Product = mongoose.model("Product", ProductSchema);

module.exports = Product;