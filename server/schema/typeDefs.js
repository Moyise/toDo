const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    avatar: String
  }

  type TaskList {
    id: ID!
    createdAt: String!
    title: String!
    progress: Float!
    users: [User!]!
    todos: [ToDO!]!
  }

  type ToDO {
    id: ID!
    content: String!
    isCompleted: Boolean!
    taskList: TaskList!
  }

  # Queries
  type Query {
    taskList: [TaskList!]!
  }

  #Mutations
  type Mutation {
    signUp(input: SignupInput!): AuthUser!
    signIn(input: SignInInput!): AuthUser!
    createTaskList(title: String!): TaskList!
  }

  # Inputs
  input SignupInput {
    name: String!
    email: String!
    password: String!
    avatar: String
  }

  input SignInInput {
    email: String!
    password: String!
  }

  # Authentication
  type AuthUser {
    user: User!
    token: String!
  }
`;

module.exports = { typeDefs };
