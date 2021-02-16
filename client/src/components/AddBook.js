import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const AddBook = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  const displayAuthors = () => {
    if (loading) return <option>Loading...</option>;
    if (error) {
      console.error(error);
      return <option>Error. Please see console for details.</option>;
    }
    return data.authors.map((author) => (
      <option key={author.id} value={author}>
        {author.name}
      </option>
    ));
  };

  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Author:</label>
        <select>{displayAuthors()}</select>
      </div>

      <button>Add Book</button>
    </form>
  );
};
