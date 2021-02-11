const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();

const schema = require("./schemas/schema");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
