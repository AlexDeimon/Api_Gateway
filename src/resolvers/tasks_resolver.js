const taskResolver = {
    Query: {
        taskByUserIdAndTaskTittle: (_, {userId, taskTittle}, {dataSources, userIdToken}) => {
            if(userId == userIdToken)
                return dataSources.tasksAPI.taskByUserIdAndTaskTittle(userId, taskTittle)
            else
                null
        },
        taskByUserIdAndFinalDate: (_, {userId, finalDate}, {dataSources, userIdToken}) => {
            if(userId == userIdToken)
                return dataSources.tasksAPI.taskByUserIdAndFinalDate(userId, finalDate)
            else
                null
        }
    },
    Mutation: {
        createTask: (_, {task}, {dataSources, userIdToken}) => {
            if(task.userId == userIdToken)
                return dataSources.tasksAPI.createTask(task)
            else
                return null
        },
        updateTask: (_, {task}, {dataSources, userIdToken}) => {
            if(task.userId == userIdToken)
                return dataSources.tasksAPI.updateTask(task)
            else
                return null
        },
        deleteTask: (_, {userId, taskTittle}, {dataSources, userIdToken}) => {
            if(userId == userIdToken)
                return dataSources.tasksAPI.deleteTask(userId, taskTittle)
            else
                return null
        }
    }
};

module.exports = taskResolver;