require("dotenv").config();

const mongoose = require("mongoose");

const { Author, Book } = require("./models");

const connection = mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/graphql-demo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// dummy data
const books = [
  { name: "Name of the Wind", genre: "Fantasy" },
  { name: "The Final Empire", genre: "Fantasy" },
  { name: "The Long Earth", genre: "Sci-Fi" },
  { name: "The Hero of Ages", genre: "Fantasy" },
  { name: "The Colour of Magic", genre: "Fantasy" },
  { name: "The Light Fantastic", genre: "Fantasy" },
];

const authors = [
  { name: "Patrick Rothfuss", age: 44 },
  { name: "Brandon Sanderson", age: 42 },
  { name: "Terry Pratchett", age: 66 },
];

async function seed() {
  const allAuthors = await Author.find({});
  const allBooks = await Book.find({});

  for (let i = 0; i < allAuthors.length; i++) {
    const author = allAuthors[i];
    await author.delete();
  }

  for (let i = 0; i < allBooks.length; i++) {
    const book = allBooks[i];
    await book.delete();
  }

  const savedAuthors = [];
  const savedBooks = [];

  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    const newAuthor = new Author(author);
    savedAuthors.push(await newAuthor.save());
    console.log(newAuthor);
  }

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const author = savedAuthors[i % savedAuthors.length];
    const newBook = new Book({ ...book, authorId: author._id });
    savedBooks.push(await newBook.save());
    console.log(newBook);
  }

  await mongoose.disconnect();
}

mongoose.connection.once("open", seed);
