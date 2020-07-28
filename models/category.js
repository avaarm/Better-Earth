const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  summary: String,
  // date: { type: Date, default: Date.now }
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
