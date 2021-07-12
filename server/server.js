const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { typeDefs } = require("./schema/typeDefs");
const { resolvers } = require("./schema/resolvers");
const { connectDB } = require("./config/db");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(PORT, () =>
  console.log(`Now browse to http://localhost:${PORT}` + server.graphqlPath)
);
