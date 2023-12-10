const gql = require("graphql-tag")
const {ApolloServer} = require("apollo-server")
const port = 4000

const typeDefs = gql`
  type User {
    email: String!
    avatarUrl: String
    friends: [User]!
  }

  type Query {
    me: User!
  }
`

const resolvers = {
  Query: {
    me() {
      return {
        email: "user@example.com",
        avatarUrl: "http://example.com",
        friends: [],
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen(port).then(() => console.log(`server listening on ${port}`))
