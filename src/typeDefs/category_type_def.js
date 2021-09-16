const { gql } = require('apollo-server');

const categoryTypeDefs = gql`
    type Category {
        categoryId: String
        userId: String
        categoryName: String
        categoryColor: String
    }
    
    input CategoryInput {
        userId: String
        categoryName: String
        categoryColor: String
    }

    type message{
        response: String
    }

    extend type Mutation {
        createCategory(category: CategoryInput!): Category
        deleteCategory(userId: String!, categoryName: String!): message
    }
`;

module.exports = categoryTypeDefs; 