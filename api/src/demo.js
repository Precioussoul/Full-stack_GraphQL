const gql = require("graphql-tag")

const typeDefs = gql`
  type User {
    email: string!
    avatarUrl: string
    friends: [User!]!
  }

  type Query {
    me: User!
  }
`

const resolver = {
  Query: {
    me() {
      return {
        email: "user@example.com",
        avatarUrl: "http://example.com",
        friends,
      }
    },
  },
}
