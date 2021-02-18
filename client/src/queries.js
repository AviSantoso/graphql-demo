import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

export const MUTATION_ADD_BOOK = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const QUERIES = { GET_AUTHORS, GET_BOOKS, MUTATION_ADD_BOOK };

export default QUERIES;
