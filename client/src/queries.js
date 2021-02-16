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

const QUERIES = { GET_AUTHORS, GET_BOOKS };

export default QUERIES;