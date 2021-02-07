const express = require("express");
const graphqlHTTP = require("express-graphql");

const PORT = process.env.PORT || 8080;

const app = express();

app.use("/graphql", graphqlHTTP({}));

app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
