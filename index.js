const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose"); // Mongoose is the ORM library object  relational mapper which let us interface with the  MongoDB database

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/resolvers");
const { MONGODB } = require("./config.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true })
  .then(() => {
    console.log("MONGODB Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
