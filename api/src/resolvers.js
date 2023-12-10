/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    user() {
      return {
        id: "user1",
        username: "olamide234",
      }
    },
    pet() {
      return {
        id: "dog1",
        createdAt: "2023-10-45",
        name: "Lucky",
        type: "DOG",
      }
    },
  },
  Mutation: {},
  Pet: {
    img(pet) {
      return pet.type === "DOG"
        ? "https://placedog.net/300/300"
        : "http://placekitten.com/300/300"
    },
  },
  User: {},
}
