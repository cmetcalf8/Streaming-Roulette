const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('favs');
      },
    },
  
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
      addFavorite: async (parent, { favoriteTitle }) => {
        const favorite = await Favorite.create({ favoriteTitle });
  
        await User.findOneAndUpdate(
          { username: favoriteTitle },
          { $addToSet: { favorites: favorite.title } }
        );
  
        return favorite;
      },
    
      removeFavorite: async (parent, { favoriteTitle }) => {
        return Favorite.findOneAndDelete({ title: favoriteTitle });
      },
    },
  };
  
  module.exports = resolvers;

  // favorites: async (parent, { username }) => {
  //   const params = username ? { username } : {};
  //   return Favorite.find(params).sort({ createdAt: -1 });
  // },
  // favorite: async (parent, { favoriteTitle }) => {
  //   return Favorite.findOne({ title: favoriteTitle });
  // },