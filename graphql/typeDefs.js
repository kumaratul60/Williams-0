const graphql = require("graphql-tag");

module.exports = graphql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
    type:String
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
    type: String
  }

  type Query {
    # sayHi: String!

    getPosts: [Post] # getPosts return a array of posts
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!, type: String): User!
  }
`;
