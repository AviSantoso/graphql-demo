const gql = require("graphql");

const BookType = new gql.GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: gql.GraphQLString },
    name: { type: gql.GraphQLString },
    genre: { type: gql.GraphQLString },
  }),
});

const RootQuery = new gql.GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    book: { BookType },
    args: { id: { type: gql.GraphQLString } },
  }),
});
