import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

export const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const displayBooks = () =>
    data.books.map((book) => <li key={book.id}>{book.name}</li>);

  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
    </div>
  );
};

export default BookList;
