const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  category: {
    type: String,
    default: "",
  },
  productName: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    // required: false,
  },
  // url string for thumbnail image
  thumbnail: {
    type: String,
    default: "",
  },
  // url for Product web page - unique index
  href: {
    type: String,
    default: "",
    unique: false,
  },
  summary: {
    type: String,
    default: "",
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
