const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Favorite {
    _id: ID!
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }
  type Movie {
    title: String
    imageURL: String
  }

  type Query {
    user(username: String!): User
    movieRecomendation: Movie
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFavorite(favoriteTitle: String!): Favorite
    removeFavorite(favoriteTitle: String!): Favorite
  }
`;

module.exports = typeDefs;