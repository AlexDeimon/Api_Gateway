const categoryResolver = {
    Query: {},

    Mutation: {
        createCategory: (_, {category}, {dataSources, userIdToken}) => {
            if(category.userId == userIdToken)
                return dataSources.tasksAPI.createCategory(category)
            else
                return null
        },

        deleteCategory: (_, {userId, categoryName}, {dataSources, userIdToken}) => {
            if(userId == userIdToken)
                return dataSources.tasksAPI.deleteCategory(userId, categoryName)
            else
                return null
        }
    }
};

module.exports = categoryResolver;