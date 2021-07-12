const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    title: String!
    author: String!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    avatar: String
  }

  # Queries
  type Query {
    getAllBooks: [Book!]!
  }

  #Mutations
  type Mutation {
    createBook(title: String!, author: String!): Book!
  }
`;

module.exports = { typeDefs };
