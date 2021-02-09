const _ = require("lodash");
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");

// dummy data
const books = [
  { name: "Test A", id: 1 },
  { name: "Test B", id: 2 },
  { name: "Test C", id: 3 },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    book: { BookType },
    args: { id: { type: GraphQLString } },
    resolve(parent, args) {
      // Code to get data from db
      return _.find(books, { id: args.id });
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
