import React from "react";
import "./App.css";

import { BookList } from "./components";

function App() {
  return (
    <div id="main">
      <h1>Avi's Reading List</h1>
      <BookList />
    </div>
  );
}

export default App;
