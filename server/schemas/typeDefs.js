const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    signUp(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFavorite(favoriteText: String!, favoriteAuthor: String!): Favorite
    removeFavorite(favoriteId: ID!): Favorite
  }
`;

module.exports = typeDefs;