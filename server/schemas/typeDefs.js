const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    author: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
  
  type Auth{
    token: String
    user: User
  }

  type Query {
    getSingleUser(username: String!): User
    login(username: String!, password: String!): Auth
  }

  type Mutation {
    createUser(thoughtText: String!, thoughtAuthor: String!): User
    saveBook(thoughtText: String!, thoughtAuthor: String!): Book
    deleteBook(thoughtId: ID!): Book
  }
`;

module.exports = typeDefs;
