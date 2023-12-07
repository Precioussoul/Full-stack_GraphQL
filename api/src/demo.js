const { ApolloServer } = require("apollo-server")
const gql = require("graphql-tag")
const port = 4000

const typeDefs = gql `
  type User {
    email: string!
    avatarUrl: string
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