import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_BOOKS, GET_AUTHORS, MUTATION_ADD_BOOK } from "../queries";

export const AddBook = () => {
  const nameRef = React.useRef();
  const genreRef = React.useRef();
  const authorRef = React.useRef();

  const { loading, error, data } = useQuery(GET_AUTHORS);
  const [addBook] = useMutation(MUTATION_ADD_BOOK);

  const displayAuthors = () => {
    if (loading) return <option>Loading...</option>;
    if (error) {
      console.error(error);
      return <option>Error. Please see console for details.</option>;
    }
    return data.authors.map((author) => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const genre = genreRef.current.value;
    const authorId = authorRef.current.value;
    const { data } = await addBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: GET_BOOKS }],
    });

    console.log(`Added a new book:`, data.addBook);
  };

  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" ref={nameRef} placeholder="Book name" />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text" ref={genreRef} placeholder="Genre" />
      </div>

      <div className="field">
        <label>Author:</label>
        <select ref={authorRef}>{displayAuthors()}</select>
      </div>

      <button onClick={handleAddBook}>Add Book</button>
    </form>
  );
};
