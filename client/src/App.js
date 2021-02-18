import React from "react";
import "./App.css";

import { BookList, AddBook, BookDetails } from "./components";

function App() {
  return (
    <div id="main">
      <h1>Avi's Reading List</h1>
      <BookList />
      <BookDetails bookId="0" />
      <AddBook />
    </div>
  );
}

export default App;
