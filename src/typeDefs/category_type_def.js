const { gql } = require('apollo-server');

const categoryTypeDefs = gql`
    type Category {
        categoryId: String!
        categoryName: String
        color: String
        userId: String
    }
    
    input CategoryInput {
        categoryName: String
        color: String
        userId: String
    }

    type message{
        response: String
    }

    
    type Mutation {
        createCategory(category: CategoryInput!): Category
        deleteCategory(userId: String!, categoryName: String!): message
    }
`;

module.exports = categoryTypeDefs; 