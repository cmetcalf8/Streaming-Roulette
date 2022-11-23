const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find().populate('thoughts');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('thoughts');
      },
      thoughts: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Thought.find(params).sort({ createdAt: -1 });
      },
      thought: async (parent, { thoughtId }) => {
        return Thought.findOne({ _id: thoughtId });
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
          { username: thoughtTitle },
          { $addToSet: { favorites: favorite._id } }
        );
  
        return favorite;
      },
    
      removeFavorite: async (parent, { favoriteId }) => {
        return Favorite.findOneAndDelete({ _id: favoriteId });
      },
    },
  };
  
  module.exports = resolvers;