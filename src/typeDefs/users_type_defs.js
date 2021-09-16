const { gql } = require('apollo-server');

const usersTypeDefs = gql `
    type Tokens {
        refresh: String!
        access: String!
    }

    type Access {
        access: String!
    }

    type User {
        id: Int!
        username: String!
        password: String!
    }

    input UserInput {
        username: String!
        password: String!
    }

    input CredentialsInput {
        username: String!
        password: String!
    }
    
    extend type Mutation {
        authenticate(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }

    type Mutation {
        createUser(user: UserInput!): User!
    }
`;

module.exports = usersTypeDefs;