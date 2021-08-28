const taskResolver = {
    Query: {
        taskByUserIdAndTaskTittle: (_, {userId, taskTittle}, {dataSources, userIdToken}) => {
            if(userId == userIdToken)
                return dataSources.taskAPI.taskByUserIdAndTaskTittle(userId, taskTittle)
            else
                null
        },
        taskByUserIdAndFinalDate: (_, {userId, finalDate}, {dataSources, userIdToken}) => {
            if(userId == userIdToken)
                return dataSources.taskAPI.taskByUserIdAndFinalDate(userId, finalDate)
            else
                null
        }
    },
    Mutation: {
        createTask: (_, {task}, {dataSources, userIdToken}) => {
            if(task.userId == userIdToken)
                return dataSources.taskAPI.createTask(task)
            else
                return null
        },
        updateTask: (_, {task}, {dataSources, userIdToken}) => {
            if(task.userId == userIdToken)
                return dataSources.taskAPI.updateTask(task)
            else
                return null
        },
        deleteTask: (_, {userId, taskTittle}, {dataSources, userIdToken}) => {
            if(userId == userIdToken)
                return dataSources.taskAPI.deleteTask(userId, taskTittle)
            else
                return null
        }
    }
};

module.exports = taskResolver;