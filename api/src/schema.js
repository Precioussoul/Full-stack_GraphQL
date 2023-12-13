const {gql} = require("apollo-server")

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
  }

  input PetInput {
    name: String
    type: String
  }

  type Shoe {
    brand: String!
    size: Int!
  }

  input ShoeInput {
    brand: String!
    size: Int!
  }

  type Query {
    pets(input: PetInput): [Pet]!
  }
`

module.exports = typeDefsmodule.exports = typeDefs
