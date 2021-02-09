const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");

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
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
