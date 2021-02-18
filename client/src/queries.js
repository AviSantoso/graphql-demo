import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  query {
    authors {
      name
      id
    }
  }
`;

export const GET_BOOKS = gql`
  query {
    books {
      name
      id
    }
  }
`;

export const GET_BOOK = gql`
  query($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
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
