const {Book, User} = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const {signToken} = require('../utils/auth');


const resolvers = {
    Query: {
        getSingleUser: async (parent, args, context) => {
            return User.findOne({_id: context.user._id});
        },

        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});
            const correctPassword = await User.isCorrectPassword(password);
            const token = signToken(user);
            return {token, user};
        },
    },

    Mutation: {
        createUser: async (parent, args) => {
            return User.create(args);
        },
        saveBook: async (parent, args) => {
            return Book.create(args);
        },
        deleteBook: async (parent, {bookId}) => {
            return Book.findOneAndDelete({bookId});
        },
    },
};

module.exports = resolvers;
