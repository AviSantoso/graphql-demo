const mongoose = require("mongoose");

const name = "Book";

const schema = new mongoose.Schema({
  name: String,
  genre: String,
  authorId: String,
});

mongoose.model(name, schema);

module.exports = () => mongoose.model(name);
