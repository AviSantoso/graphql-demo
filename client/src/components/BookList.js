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

  console.log(data);

  return (
    <div>
      <ul id="book-list">
        <li>Book Name</li>
      </ul>
    </div>
  );
};
