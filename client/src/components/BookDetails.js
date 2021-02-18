import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_BOOK } from "../queries";

export const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: bookId },
  });
  console.log(data);
  return <div id="book-details">Loading book details...</div>;
};

export default BookDetails;
