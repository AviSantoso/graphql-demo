import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries";

export const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  const displayBooks = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return data.books.map((book) => <li key={book.id}>{book.name}</li>);
  };

  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  );
};

export default BookList;
