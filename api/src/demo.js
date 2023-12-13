const gql = require("graphql-tag")
const {ApolloServer} = require("apollo-server")
const port = 4000

const typeDefs = gql`
  type User {
    email: String!
    avatarUrl: String
    friends: [User]!
  }

  type Shoe {
    brand: String!
    size: Int
  }

  input ShoeInput {
    brand: String!
    size: Int
  }

  type Query {
    me: User!
    shoes(input: ShoeInput): [Shoe]!
  }
`

const resolvers = {
  Query: {
    shoes(_, {input}) {
      return [
        {brand: "nike", size: 23},
        {brand: "adiddas", size: 45},
      ].filter((shoe) => shoe.brand === input.brand)
    },
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
