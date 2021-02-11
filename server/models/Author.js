const mongoose = require("mongoose");

const name = "Author";

const schema = new mongoose.Schema({
  name: String,
  age: Number,
});

mongoose.model(name, schema);

module.exports = () => mongoose.model(name);
