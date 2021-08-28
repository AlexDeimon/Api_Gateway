const categoryResolver = {
    Mutation: {
        createCategory: (_, {category}, {dataSources, userIdToken}) => {
            if(category.userId == userIdToken)
                return dataSources.taskAPI.createCategory(category)
            else
                return null
        },

        deleteCategory: (_, {userId, categoryName}, {dataSources, userIdToken}) => {
            if(userId == userIdToken)
                return dataSources.taskAPI.deleteTask(userId, categoryName)
            else
                return null
        }
    }
};

module.exports = categoryResolver;