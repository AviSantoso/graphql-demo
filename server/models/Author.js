const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  age: Integer,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
